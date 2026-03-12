import React from "react";

export default function Footer() {
  return (
    <footer>
      <p className="text-center text-sm text-zinc-600 dark:text-zinc-400">
        &copy; {new Date().getFullYear()} Main Layout
      </p>
    </footer>
  );
}
