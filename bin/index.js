#!/usr/bin/env node

const fs = require("fs-extra");
const path = require("path");
const chalk = require("chalk");

if (!projectName) {
  console.log(chalk.red("Please provide project name"));
  process.exit(1);
}

const targetPath = path.join(process.cwd(), projectName);

if (fs.existsSync(targetPath)) {
  console.log(chalk.red("Folder already exists"));
  process.exit(1);
}

const templatePath = path.join(__dirname, "../templates/next-app");

fs.copySync(templatePath, targetPath);

console.log(chalk.green("Project created successfully"));
console.log(`cd ${projectName}`);
console.log("npm install");
console.log("npm run dev");