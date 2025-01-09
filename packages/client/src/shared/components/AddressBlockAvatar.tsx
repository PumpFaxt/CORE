import type React from "react";
import { twMerge } from "tailwind-merge";
import { isAddress } from "viem";

const SIZES = [10, 16, 24, 24, 16, 10];

export default function AddressBlockavatar(props: {
  address: string;
  className?: string;
  alphabet?: string;
}) {
  if (!isAddress(props.address)) return <figure />;

  return (
    <div
      className={twMerge(
        "aspect-square flex flex-wrap overflow-hidden group relative cursor-pointer",
        props.className,
      )}
      style={{
        "--clr": "#" + props.address.slice(2, 8),
      } as React.CSSProperties}
    >
      {props.address
        .slice(2)
        .split("")
        .map((c, key) => (
          <figure
            key={key}
            className="content-visible bg-white"
            style={{
              opacity: Number(`0x${c}`) / 16,
              width: `${SIZES[key % SIZES.length]}%`,
            }}
          />
        ))}

      <figure className="absolute-cover z-1 bg-[var(--clr)] mix-blend-color" />
      <h1 className="absolute-cover flex justify-center items-center font-black text-white text-[12cqw] drop-shadow-[0px_0px_4px_black]">
        {props.alphabet?.slice(0, 1)}
      </h1>
    </div>
  );
}

// 10, 16, 24, 24, 16, 10
