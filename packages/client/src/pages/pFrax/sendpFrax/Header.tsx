import FlexSeparator from "../../../shared/components/FlexSeparator.tsx";
import Icon from "../../../shared/components/Icon.tsx";
import Link from "../../../shared/components/Link.tsx";

export default function Header() {
  return (
    <div className="flex">
      <Link to="/pfrax">
        <Icon name="X" />
      </Link>
      <FlexSeparator size="md" />
      <p>Send to</p>
      <FlexSeparator size="full" />
      <Icon name="ScanQrCode" />
    </div>
  );
}
