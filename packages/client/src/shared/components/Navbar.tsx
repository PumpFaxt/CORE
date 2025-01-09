import Icon from "./Icon.tsx";
import Link from "./Link.tsx";
import type { icons } from "lucide-preact";

type NavbarItem = {
  iconName: keyof typeof icons;
  name: string;
  to: string;
};

export default function Navbar() {
  return (
    <div className="relative z-100 bg-background justify-between flex w-full py-2 px-4 rounded-t-md text-sm border-t border-border shadow-[0px_-10px_20px_rgba(0,_0,_0,_0.38)]">
      {navbarList.map((item, key) => (
        <Link
          key={key}
          to={item.to}
          className="flex flex-col items-center gap-y-1"
        >
          <Icon name={item.iconName} className="size-5" weight="light" />
          <p className="text-xs">{item.name}</p>
        </Link>
      ))}
    </div>
  );
}

const navbarList: NavbarItem[] = [
  {
    iconName: "Gem",
    name: "Discover",
    to: "/discover",
  },
  {
    iconName: "MessagesSquare",
    name: "Chat",
    to: "/chat",
  },
  {
    iconName: "Touchpad",
    name: "PFRAX",
    to: "pfrax",
  },
  {
    iconName: "Plus",
    name: "Create",
    to: "create",
  },
  {
    iconName: "Wallet",
    name: "Portfolio",
    to: "portfolio",
  },
];
