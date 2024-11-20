import { spawn } from "node:child_process";

self.onmessage = (_) => {
  spawn(
    "nohup",
    ["cmd", "/c", "start", "../../bin/anvil.exe"],
    { stdio: "ignore" },
  );

  postMessage(0);
};
