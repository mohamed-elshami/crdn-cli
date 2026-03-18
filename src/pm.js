function detectPackageManager() {
  const ua = String(process.env.npm_config_user_agent || "").toLowerCase();
  if (ua.includes("pnpm/")) return "pnpm";
  if (ua.includes("yarn/")) return "yarn";
  if (ua.includes("bun/")) return "bun";

  const execPath = String(process.env.npm_execpath || "").toLowerCase();
  if (execPath.includes("pnpm")) return "pnpm";
  if (execPath.includes("yarn")) return "yarn";
  if (execPath.includes("bun")) return "bun";

  return "npm";
}

function globalInstallCommand(pm) {
  switch (pm) {
    case "pnpm":
      return { command: "pnpm", args: ["add", "-g"] };
    case "yarn":
      return { command: "yarn", args: ["global", "add"] };
    case "bun":
      return { command: "bun", args: ["add", "-g"] };
    case "npm":
    default:
      return { command: "npm", args: ["i", "-g"] };
  }
}

module.exports = {
  detectPackageManager,
  globalInstallCommand,
};

