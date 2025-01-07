import Icon from "./Icon.tsx";

export default function Navbar() {
  return (
    <div className="fixed bottom-0 bg-background justify-between flex w-full py-2 px-4 rounded-t-md text-sm border-t border-border shadow-lg">
      <div className="flex flex-col items-center">
        <Icon name="Gem" />
        <p>Discover</p>
      </div>
      <div className="flex flex-col items-center">
        <Icon name="MessagesSquare" />
        <p>Chat</p>
      </div>
      <div className="flex flex-col items-center">
        <Icon name="Touchpad" />
        <p>PFRAX</p>
      </div>
      <div className="flex flex-col items-center">
        <Icon name="Plus" />
        <p>Create</p>
      </div>
      <div className="flex flex-col items-center">
        <Icon name="Wallet" />
        <p>Portfolio</p>
      </div>
    </div>
  );
}
