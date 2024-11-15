import { cn } from "../lib/tailwind.ts";

interface ISeparatorProps {
  className?: string;
  size?: "xs" | "sm" | "base" | "md" | "lg" | "xl" | "2xl" | "full";
}

const BASE_SIZE = "0.8rem";

export default function FlexSeparator(props: ISeparatorProps) {
  const size = props.size ?? "base";

  return (
    <figure
      role="separator"
      style={{ "--separator-base-size": BASE_SIZE }}
      className={cn(
        props.className,
        size === "xs" &&
          `basis-[calc(var(--separator-base-size)_-_6px)]`,
        size === "sm" &&
          `basis-[calc(var(--separator-base-size)_-_3px)]`,
        size === "base" && `basis-[var(--separator-base-size)]`,
        size === "md" &&
          `basis-[calc(var(--separator-base-size)_+_4px)]`,
        size === "lg" &&
          `basis-[calc(var(--separator-base-size)_+_8px)]`,
        size === "xl" &&
          `basis-[calc(var(--separator-base-size)_+_12px)]`,
        size === "2xl" &&
          `basis-[calc(var(--separator-base-size)_+_18px)]`,
        size === "full" && `flex-1`,
      )}
    />
  );
}
