import FlexSeparator from "../../../shared/components/FlexSeparator.tsx";
import Icon from "../../../shared/components/Icon.tsx";

export default function Header() {
  return (
    <div className="flex">
      <Icon name="X" />
      <FlexSeparator size="md" />
      <p>Send to</p>
      <FlexSeparator size="full" />
      <Icon name="ScanQrCode" />
    </div>
  );
}
