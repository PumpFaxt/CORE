import { twMerge } from "tailwind-merge";

export function cn(...args: (string | undefined | false)[]) {
  return twMerge(...args);
}
