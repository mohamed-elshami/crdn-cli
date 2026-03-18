const chalk = require("chalk");

function header() {
  console.log(chalk.cyan.bold("\nCRDN CLI"));
  console.log(chalk.dim("Starting project setup...\n"));
}

function info(message) {
  console.log(chalk.cyan(message));
}

function dim(message) {
  console.log(chalk.dim(message));
}

function success(message) {
  console.log(chalk.green(message));
}

function successStrong(message) {
  console.log(chalk.green.bold(message));
}

function warn(message) {
  console.log(chalk.yellow(message));
}

function error(message) {
  console.log(chalk.red(message));
}

module.exports = {
  header,
  info,
  dim,
  success,
  successStrong,
  warn,
  error,
};

