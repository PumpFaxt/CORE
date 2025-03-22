import { Outlet } from "react-router";
import Tabs from "../shared/components/Tabs";
import Header from "../shared/components/Header";
import { usePrivy } from "@privy-io/react-auth";
import { cn } from "../shared/utils/utils";
import axios from "axios";
import { useEffect } from "react";

export default function () {
  const privy = usePrivy();

  useEffect(() => {
    if (privy.init && privy.authenticated) {
      privy.getAccessToken().then((token) => {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      });
    }
  }, [privy.init, privy.authenticated]);

  return (
    <main className="h-screen flex flex-col relative">
      <Header />

      <div
        className={cn(
          "flex-1 overflow-y-scroll pb-[10vh] duration-300",
          !privy.ready && "opacity-0 scale-50 saturate-0"
        )}
      >
        <Outlet />
      </div>

      <Tabs />
    </main>
  );
}
