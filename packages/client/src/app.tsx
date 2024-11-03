import { useState } from "preact/hooks";
import { ConnectButton, useAccount } from "@particle-network/connectkit";

export function App() {
  const [count, setCount] = useState(0);

  const { address, isConnected, chainId } = useAccount();
  return (
    <>
      <div>
      </div>
      <h1>Pumpfaxt</h1>
      <ConnectButton />

      {isConnected && (
        <>
          <h2>Address: {address}</h2>
          <h2>Chain ID: {chainId}</h2>
        </>
      )}
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
      </div>
      <p>
        Check out{" "}
        <a
          href="https://preactjs.com/guide/v10/getting-started#create-a-vite-powered-preact-app"
          target="_blank"
        >
          create-preact
        </a>
        , the official Preact + Vite starter
      </p>
      <p class="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
    </>
  );
}
