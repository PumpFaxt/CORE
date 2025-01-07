import Navbar from "./shared/components/Navbar.tsx";
import type { Children } from "./shared/types/utils.d.ts";

export default function Layout(props: { children: Children }) {
  return (
    <>
      {props.children}
      <Navbar />
    </>
  );
}
