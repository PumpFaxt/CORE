import { useState } from "preact/hooks";
import { useLogin, useLogout } from "@privy-io/react-auth";

export function App() {
  const { logout } = useLogout();
  const { login } = useLogin({
    onComplete: (
      user,
      isNewUser,
      wasAlreadyAuthenticated,
      loginMethod,
      linkedAccount,
    ) => {
      console.log(
        user,
        isNewUser,
        wasAlreadyAuthenticated,
        loginMethod,
        linkedAccount,
      );
      // Any logic you'd like to execute if the user is/becomes authenticated while this
      // component is mounted
    },
    onError: (error) => {
      console.log(error);
      // Any logic you'd like to execute after a user exits the login flow or there is an error
    },
  });
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
      </div>
      <h1>Pumpfaxt</h1>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <button className="bg-teal-300" onClick={login}>Connect</button>
      <button onClick={logout}>Disconnect</button>

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
