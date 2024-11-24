import { useLocation } from "preact-iso";
import type { Children } from "../types/utils.d.ts";
import { cn } from "../lib/tailwind.ts";

interface ILinkProps {
  to: string;
  children: Children;
  className?: string;
}

export default function (props: ILinkProps) {
  const { route } = useLocation();

  return (
    <button
      role="link"
      onClick={() => route(props.to)}
      className={cn("cursor-pointer", props.className)}
    >
      {props.children}
    </button>
  );
}
