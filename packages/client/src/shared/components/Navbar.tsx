import Icon from "./Icon.tsx";
import Link from "./Link.tsx";

export default function Navbar() {
  return (
    <div className="relative z-100 bg-background justify-between flex w-full py-2 px-4 rounded-t-md text-sm border-t border-border shadow-[0px_-10px_20px_rgba(0,_0,_0,_0.38)]">
      <Link to="discover" className="flex flex-col items-center gap-y-1 ">
        <Icon name="Gem" className="size-6" />
        <p>Discover</p>
      </Link>
      <div className="flex flex-col items-center gap-y-1">
        <Icon name="MessagesSquare" className="size-6" />
        <p>Chat</p>
      </div>
      <Link to="pfrax" className="flex flex-col items-center gap-y-1">
        <Icon name="Touchpad" className="size-6" />
        <p>PFRAX</p>
      </Link>
      <div className="flex flex-col items-center gap-y-1">
        <Icon name="Plus" className="size-6" />
        <p>Create</p>
      </div>
      <div className="flex flex-col items-center gap-y-1">
        <Icon name="Wallet" className="size-6" />
        <p>Portfolio</p>
      </div>
    </div>
  );
}
