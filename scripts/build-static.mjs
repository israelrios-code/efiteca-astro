import { spawn } from "node:child_process";

const child = spawn(
  process.platform === "win32" ? "cmd.exe" : "sh",
  process.platform === "win32" ? ["/c", "npm run build"] : ["-c", "npm run build"],
  {
    stdio: "inherit",
    cwd: process.cwd(),
    env: {
      ...process.env,
      STATIC_BUILD: "true"
    }
  }
);

child.on("exit", (code) => {
  process.exit(code ?? 1);
});
