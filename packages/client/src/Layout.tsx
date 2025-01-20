import { useCreateWallet, usePrivy } from "privy";
import { useEffect } from "preact/hooks";
import Navbar from "./shared/components/Navbar.tsx";
import type { Children } from "./shared/types/utils.d.ts";

export default function Layout(props: { children: Children }) {
  const { user } = usePrivy();
  const { createWallet } = useCreateWallet();

  useEffect(() => {
    if (!user?.wallet) {
      createWallet();
    }
  }, []);

  return (
    <div className="flex h-screen flex-col">
      <article className="flex-1 overflow-y-scroll">
        {props.children}
      </article>
      <Navbar />
    </div>
  );
}
