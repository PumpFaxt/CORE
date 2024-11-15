import { cn } from "../lib/tailwind.ts";
import { chooseRandomFromArray } from "../lib/utils.ts";

interface ILoadingProps {
  className?: string;
}

export default function Loading(props: ILoadingProps) {
  let image: string | null = null;

  const images = [];
  for (let i = 1; i <= 6; i++) {
    images.push(`/images/loading/loading-${i}.gif`);
  }
  if (image === null) {
    image = chooseRandomFromArray(images);
  }

  return (
    <div
      className={cn(
        "w-full flex flex-col items-center gap-y-5",
        props.className,
      )}
    >
      <img
        src={image}
        alt="Loading"
        className={"motion-duration-500 w-full aspect-square object-cover"}
      />

      <span
        className={"font-bold text-2xl text-rainbow"}
      >
        Loading
      </span>
    </div>
  );
}
