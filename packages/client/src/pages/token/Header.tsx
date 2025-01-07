import FlexSeparator from "../../shared/components/FlexSeparator.tsx";
import Icon from "../../shared/components/Icon.tsx";

export default function Header() {
  return (
    <div className="flex items-center">
      <Icon name="ArrowLeft" className="size-4" />
      <FlexSeparator size="sm" />
      <p className="font-semibold">BTC / KLYRR</p>
      <FlexSeparator size="full" />
      <div className="flex">
        <Icon name="Star" className="size-6" />
        <FlexSeparator size="md" />
        <Icon name="Share" className="size-6" />
        <FlexSeparator size="md" />
        <Icon name="TriangleAlert" className="size-6" />
      </div>
    </div>
  );
}
