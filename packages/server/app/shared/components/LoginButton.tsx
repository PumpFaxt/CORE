import { usePrivy } from "@privy-io/react-auth";
import { Drawer } from "vaul";
export default function (props: {
  children: React.ReactNode;
  className?: string;
}) {
  const privy = usePrivy();

  return (
    <Drawer.Root direction="right">
      <Drawer.Trigger className={props.className}>
        {props.children}
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Content className="flex flex-col rounded-t-[10px] h-full fixed bottom-0 left-0 right-0 bg-background">
          <button
            className="bg-secondary m-4 rounded-xl py-3"
            onClick={() => privy.login()}
          >
            Customize later
          </button>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
