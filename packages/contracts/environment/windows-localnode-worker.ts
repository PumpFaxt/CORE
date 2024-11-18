import { spawn } from "node:child_process";

self.onmessage = (event) => {
  const process = spawn(
    "nohup",
    ["cmd", "/c", "start", "../../bin/anvil.exe"],
    { stdio: "ignore" },
  );
};
