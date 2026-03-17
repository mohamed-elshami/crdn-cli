#!/usr/bin/env node

const fs = require("fs-extra");
const path = require("path");
const chalk = require("chalk");
const { Command } = require("commander");
const { spawn } = require("child_process");
const readline = require("readline/promises");
const { stdin: input, stdout: output } = require("process");

function run(command, args, cwd) {
  return new Promise((resolve, reject) => {
    const isWin = process.platform === "win32";
    const child = isWin
      ? spawn([command, ...args].join(" "), [], { cwd, stdio: "inherit", shell: true })
      : spawn(command, args, { cwd, stdio: "inherit" });
    child.on("error", reject);
    child.on("close", (code) => {
      if (code === 0) resolve();
      else
        reject(new Error(`${command} ${args.join(" ")} exited with ${code}`));
    });
  });
}

async function promptForProjectName() {
  const rl = readline.createInterface({ input, output });
  try {
    const answer = await rl.question("Project name: ");
    return (answer || "").trim();
  } finally {
    rl.close();
  }
}

async function main(projectName, options) {
  if (!projectName) {
    if (!process.stdin.isTTY) {
      console.log(chalk.red("Please provide a project name."));
      process.exit(1);
    }

    projectName = await promptForProjectName();
    if (!projectName) {
      console.log(chalk.red("Project name is required."));
      process.exit(1);
    }
  }

  const targetPath = path.join(process.cwd(), projectName);

  if (fs.existsSync(targetPath)) {
    if (!options.force) {
      console.log(
        chalk.red(
          `Target directory already exists: ${projectName}\n` +
            `Use ${chalk.bold("--force")} to overwrite.`,
        ),
      );
      process.exit(1);
    }

    fs.removeSync(targetPath);
  }

  const templatePath = path.join(__dirname, "../templates", options.template);
  if (!fs.existsSync(templatePath)) {
    console.log(
      chalk.red(
        `Unknown template: ${options.template}\n` +
          `Available templates are folders under ${chalk.bold("templates/")}.`,
      ),
    );
    process.exit(1);
  }

  fs.copySync(templatePath, targetPath);

  /* update package.json */

  const packageJsonPath = path.join(targetPath, "package.json");
  if (fs.existsSync(packageJsonPath)) {
    const packageJson = fs.readJsonSync(packageJsonPath);
    packageJson.name = projectName;
    fs.writeJsonSync(packageJsonPath, packageJson, { spaces: 2 });
  }

  console.log(chalk.green("Project created successfully"));

  const pm = options.pm;

  if (options.install) {
    console.log(chalk.cyan(`Installing dependencies using ${pm}...`));
    const installArgs = ["install"];

    try {
      console.log(chalk.dim(`> ${pm} install`));
      await run(pm, installArgs, targetPath);
    } catch (err) {
      console.log(chalk.red("Dependency installation failed."));
      console.log(chalk.red(err?.message || String(err)));
      console.log(
        chalk.yellow(
          `You can try manually:\n  cd ${projectName}\n  ${pm} install`,
        ),
      );
      process.exit(1);
    }

    console.log(chalk.green("Dependencies installed."));
  }

  console.log(`cd ${projectName}`);
  if (!options.install) console.log(`${pm} install`);
  console.log(`${pm} run dev`);
}

const program = new Command();

program
  .name("create-crdn-app")
  .description("Create a CRDN app from a template")
  .argument(
    "[project-name]",
    "Folder name for the new project (you'll be prompted if omitted)",
  )
  .option("-t, --template <name>", "Template to use", "next-app")
  .option("-f, --force", "Overwrite target directory if it exists", false)
  .option("--pm <pm>", "Package manager: npm | yarn | pnpm | bun", "npm")
  .option("--no-install", "Skip installing dependencies")
  .action(main);

program.parseAsync(process.argv);
