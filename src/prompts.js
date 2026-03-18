const readline = require("readline/promises");
const { stdin: input, stdout: output } = require("process");

async function promptForProjectName() {
  const rl = readline.createInterface({ input, output });
  try {
    const answer = await rl.question("Project name: ");
    return (answer || "").trim();
  } finally {
    rl.close();
  }
}

module.exports = { promptForProjectName };

