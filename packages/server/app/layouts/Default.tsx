import { Outlet } from "react-router";
import Tabs from "../shared/components/Tabs";
import Header from "../shared/components/Header";
import { useRef } from "react";

export default function () {
  return (
    <main className="h-screen flex flex-col relative">
      <Header />

      <div className="flex-1 overflow-y-scroll pb-[10vh]">
        <Outlet />
      </div>

      <Tabs />
    </main>
  );
}
