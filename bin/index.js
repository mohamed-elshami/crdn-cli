#!/usr/bin/env node

const { Command } = require("commander");
const { main } = require("../src/main");

const program = new Command();

program
  .name("create-crdn-app")
  .description("Create a crdn app from a template")
  .argument(
    "[project-name]",
    "Folder name for the new project (use '.' to use current folder; you'll be prompted if omitted)",
  )
  .option("-t, --template <name>", "Template to use", "next-app")
  .option("-f, --force", "Overwrite target directory if it exists", false)
  .option(
    "--pm <pm>",
    "Package manager: npm | yarn | pnpm | bun (auto-detected by default)",
  )
  .option("--no-crdn", "Skip installing crdn globally")
  .option("--no-install", "Skip installing dependencies")
  .action(main);

program.parseAsync(process.argv);
