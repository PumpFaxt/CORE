import { DynamicIcon } from "lucide-react/dynamic";
import { cn } from "../utils/utils";

export default function (props: React.ComponentProps<typeof DynamicIcon>) {
  const { className, ...restProps } = props;

  return <DynamicIcon className={cn("aspect-square", className)} {...restProps} />;
}
