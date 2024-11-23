import FlexSeparator from "../../shared/components/FlexSeparator.tsx";

export default function Navigation() {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <h1 className="text-foreground/50">
          Watchlist
        </h1>
        <FlexSeparator size="md" />
        <h1>Tokens</h1>
      </div>
      <FlexSeparator size="sm" />
      <div className="flex text-xs gap-x-4 text-foreground/50 items-center">
        <p className="bg-foreground/10 px-4 py-1 rounded-xl whitespace-nowrap text-foreground">
          Most Traded
        </p>
        {navigationList.map((navigateItem, key) => (
          <p className="whitespace-nowrap" key={key}>{navigateItem}</p>
        ))}
      </div>
    </div>
  );
}

const navigationList = [
  "Market Cap",
  "Price",
  "24H change",
];
