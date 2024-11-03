import { render } from "preact";
import { App } from "./app.tsx";
import { ParticleConnectkit } from "../shared/components/connectKit.tsx";

const mainElement = globalThis.document.getElementById("app");
if (!mainElement) throw new Error("No main element found");

const VNode = (
  <>
    <ParticleConnectkit>
      <App />
    </ParticleConnectkit>
  </>
);

render(
  VNode,
  mainElement,
);
