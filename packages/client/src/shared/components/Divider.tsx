import { cn } from "../lib/tailwind.ts";

interface IDividerProps {
  className?: string;
  children?: preact.VNode;
}

export default function Divider(props: IDividerProps) {
  return (
    <figure className={"flex items-center"} role="separator">
      <span
        className={cn(
          "h-2px flex-1 bg-muted",
          props.className,
        )}
      />
      {props.children}
      <span
        className={cn(
          "h-2px flex-1 bg-muted",
          props.className,
        )}
      />
    </figure>
  );
}
