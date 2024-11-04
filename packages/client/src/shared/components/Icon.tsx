import { icons } from "lucide-preact";

interface IIconProps {
  name: keyof typeof icons;
  color?: string;
  weight?:
    | "thin"
    | "light"
    | "normal"
    | "medium"
    | "semibold"
    | "bold";
  className?: string;
}

export default function Icon(props: IIconProps) {
  const LucideIcon = icons[props.name];
  const weight = props.weight || "normal";

  return (
    <LucideIcon
      className={props.className}
      color={props.color}
      strokeWidth={parseWeight(weight)}
    />
  );
}

function parseWeight(weight: string) {
  switch (weight) {
    case "thin":
      return "0.5";
    case "light":
      return "1";
    case "normal":
      return "2";
    case "medium":
      return "3";
    case "semibold":
      return "4";
    case "bold":
      return "5";
    default:
      return "2";
  }
}
