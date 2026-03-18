const fs = require("fs-extra");
const path = require("path");

const { promptForProjectName } = require("./prompts");
const logger = require("./logger");
const { run } = require("./run");
const { detectPackageManager, globalInstallCommand } = require("./pm");
const { resolveTarget } = require("./paths");

async function main(projectName, options) {
  logger.header();

  if (!projectName) {
    if (!process.stdin.isTTY) {
      logger.error("Please provide a project name.");
      process.exit(1);
    }

    projectName = await promptForProjectName();
    if (!projectName) {
      logger.error("Project name is required.");
      process.exit(1);
    }
  }

  const { inPlace, resolvedProjectName, targetPath } = resolveTarget(projectName);

  logger.info(`Creating project: ${resolvedProjectName}`);
  logger.dim(`Target: ${inPlace ? `${targetPath} (current folder)` : targetPath}`);

  if (!inPlace && fs.existsSync(targetPath)) {
    if (!options.force) {
      logger.error(
        `Target directory already exists: ${resolvedProjectName}\n` +
          `Use --force to overwrite.`,
      );
      process.exit(1);
    }

    logger.warn(`Removing existing directory (forced): ${resolvedProjectName}`);
    fs.removeSync(targetPath);
  }

  const templatePath = path.join(__dirname, "../templates", options.template);
  if (!fs.existsSync(templatePath)) {
    logger.error(
      `Unknown template: ${options.template}\n` +
        `Available templates are folders under templates/.`,
    );
    process.exit(1);
  }

  logger.info(`Using template: ${options.template}`);
  logger.info("Copying template files...");
  fs.copySync(templatePath, targetPath);
  logger.success("Template copied.");

  const packageJsonPath = path.join(targetPath, "package.json");
  if (fs.existsSync(packageJsonPath)) {
    logger.info("Updating project package.json...");
    const packageJson = fs.readJsonSync(packageJsonPath);
    packageJson.name = resolvedProjectName;
    fs.writeJsonSync(packageJsonPath, packageJson, { spaces: 2 });
    logger.success("package.json updated.");
  }

  logger.successStrong("\nProject created successfully.\n");

  const pm = options.pm || detectPackageManager();

  if (options.install) {
    if (options.crdn) {
      const { command, args } = globalInstallCommand(pm);
      const pretty = [command, ...args, "crdn"].join(" ");

      logger.info("Installing crdn globally (required before project deps)...");
      try {
        logger.dim(`> ${pretty}`);
        await run(command, [...args, "crdn"], process.cwd());
        logger.success("crdn installed globally.\n");
      } catch (err) {
        logger.error("Global crdn installation failed.");
        logger.error(err?.message || String(err));
        logger.warn(
          `You can try manually (maybe as Administrator):\n  ${pretty}`,
        );
        process.exit(1);
      }
    }

    logger.info(`Installing dependencies using ${pm}...`);
    try {
      logger.dim(`> ${pm} install`);
      await run(pm, ["install"], targetPath);
    } catch (err) {
      logger.error("Dependency installation failed.");
      logger.error(err?.message || String(err));
      if (!inPlace) logger.warn(`You can try manually:\n  cd ${resolvedProjectName}`);
      logger.warn(`  ${pm} install`);
      process.exit(1);
    }

    logger.success("Dependencies installed.\n");
  }

  logger.successStrong("Project is ready.\n");
  logger.info("Next steps:");
  if (!inPlace) logger.dim(`  cd ${resolvedProjectName}`);
  if (!options.install) logger.dim(`  ${pm} install`);
  logger.dim(`  ${pm} run dev`);
  console.log("");
}

module.exports = { main };

