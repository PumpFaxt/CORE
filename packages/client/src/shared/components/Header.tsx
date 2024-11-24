import FlexSeparator from "./FlexSeparator.tsx";
import Icon from "./Icon.tsx";
import Logo from "./Logo.tsx";

export default function Header() {
  return (
    <div className="flex items-center">
      <Logo className="size-6" />

      <FlexSeparator size="full" />

      <Icon name="Search" weight="normal" className="size-5" />
      <FlexSeparator size="md" />
      <Icon name="Settings" weight="normal" className="size-5" />
    </div>
  );
}
