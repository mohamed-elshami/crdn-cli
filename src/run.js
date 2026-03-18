const { spawn } = require("child_process");

function run(command, args, cwd) {
  return new Promise((resolve, reject) => {
    const isWin = process.platform === "win32";
    const child = isWin
      ? spawn([command, ...args].join(" "), [], {
          cwd,
          stdio: "inherit",
          shell: true,
        })
      : spawn(command, args, { cwd, stdio: "inherit" });

    child.on("error", reject);
    child.on("close", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${command} ${args.join(" ")} exited with ${code}`));
    });
  });
}

module.exports = { run };

