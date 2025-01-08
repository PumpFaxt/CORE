import Navbar from "./shared/components/Navbar.tsx";
import type { Children } from "./shared/types/utils.d.ts";

export default function Layout(props: { children: Children }) {
  return (
    <div className="flex h-screen flex-col">
      <article className="flex-1 overflow-y-scroll">
        {props.children}
      </article>
      <Navbar />
    </div>
  );
}
