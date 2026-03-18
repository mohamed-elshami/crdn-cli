const path = require("path");

function isCurrentDirName(name) {
  if (!name) return false;
  const trimmed = String(name).trim();
  if (!trimmed) return false;

  // Normalize ".", "./", ".\", ".////", ".\\\\"... into "."
  const withoutTrailingSeparators = trimmed.replace(/[\\/]+$/g, "");
  const normalized = path.normalize(withoutTrailingSeparators);
  return normalized === ".";
}

function resolveTarget(projectName) {
  const inPlace = isCurrentDirName(projectName);
  const resolvedProjectName = inPlace
    ? path.basename(process.cwd())
    : projectName;

  const targetPath = inPlace
    ? process.cwd()
    : path.join(process.cwd(), resolvedProjectName);

  return { inPlace, resolvedProjectName, targetPath };
}

module.exports = {
  isCurrentDirName,
  resolveTarget,
};

