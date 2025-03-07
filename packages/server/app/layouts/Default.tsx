import { Outlet } from "react-router";
import Navbar from "../shared/components/Navbar";

export default function () {
  return (
    <main className="min-h-screen relative"> 
      <Outlet />
      <Navbar />
    </main>
  );
}
