import { render } from "preact";
import { App } from "./app.tsx";
import "./index.css";

import Web3Provider from "./contexts/Web3Context.tsx";

const mainElement = globalThis.document.getElementById("app");
if (!mainElement) throw new Error("No main element found");

const RootNode = (
  <>
    <Web3Provider>
      <App />
    </Web3Provider>
  </>
);

render(
  RootNode,
  mainElement,
);
