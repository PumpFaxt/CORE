import Icon from "./Icon";

export default function () {
  return (
    <header className="bg-background flex w-full items-center p-4 gap-x-4">
        <Icon name="history" className="size-6" />

        <div className="flex-1 flex p-2 gap-x-2 bg-foreground/5 rounded-full border text-foreground/50 text-sm">
            <Icon name="search" className="size-5" />
            <span>Search</span>
        </div>

        <Icon name="settings" className="size-6" />
    </header>
  );
}
