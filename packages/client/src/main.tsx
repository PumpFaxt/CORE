import { render } from "preact";
import Router from "./router.tsx";
import "./index.css";
import { LocationProvider } from "preact-iso";
import Web3Provider from "./contexts/Web3Context.tsx";

const mainElement = globalThis.document.getElementById("app");
if (!mainElement) throw new Error("No main element found");

const RootNode = (
  <main className={"bg-background text-foreground font-openSans"}>
    <LocationProvider>
      <Web3Provider>
        <Router />
      </Web3Provider>
    </LocationProvider>
  </main>
);

render(
  RootNode,
  mainElement,
);
