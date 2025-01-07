import type React from "react";
import { twMerge } from "tailwind-merge";

export default function (props: {
  children?: React.ReactNode;
  textToBeCopied?: string;
  className?: string;
}) {
  return (
    <div
      className={twMerge("cursor-pointer relative group/tiny", props.className)}
      onClick={() => {
        props.textToBeCopied &&
          navigator.clipboard.writeText(props.textToBeCopied);
      }}
    >
      <span className="group-active/tiny:opacity-0 delay-500 group-active/tiny:delay-0 duration-300 group-active/tiny:duration-0">
        {props.children}
      </span>
      <span className="absolute-cover text-[0.9em] font-medium whitespace-nowrap opacity-0 group-active/tiny:opacity-100 delay-500 duration-300 
      group-active/tiny:duration-0 group-active/tiny:delay-0 select-none brightness-125 saturate-200">
        Copied to clipboard
      </span>
    </div>
  );
}
