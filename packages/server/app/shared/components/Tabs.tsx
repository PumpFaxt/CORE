import { NavLink } from "react-router";
import Icon, { IconType } from "./Icon";
import { cn } from "../utils/utils";

export default function () {
  return (
    <nav className="fixed bottom-0 w-full bg-card/75 backdrop-blur-md border-t flex justify-around p-4">
      {navItems.map((item, key) => (
        <NavLink
          key={key}
          to={item.link}
          className={({ isActive }) =>
            cn(
              "flex flex-col items-center gap-1",
              isActive ? "text-primary" : "text-foreground"
            )
          }
        >
          <Icon className="size-5" name={item.icon} />
          <span className="text-xs">{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}

const navItems: Array<{
  icon: IconType;
  label: string;
  link: string;
}> = [
  { icon: "rocket", label: "Launches", link: "/" },
  { icon: "message-square", label: "Chats", link: "/chats" },
  { icon: "plus-circle", label: "Create", link: "/create" },
  { icon: "wallet", label: "Portfolio", link: "/portfolio" },
];
