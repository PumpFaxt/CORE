import { DynamicIcon } from "lucide-react/dynamic";
import { cn } from "../utils/utils";

type IProps = React.ComponentProps<typeof DynamicIcon>;

export type IconType = IProps["name"]

export default function (props: IProps) {
  const { className, ...restProps } = props;

  return (
    <DynamicIcon strokeWidth={1.5} className={cn("aspect-square size-[1em]", className)} {...restProps} />
  );
}
