import { Drawer } from "vaul";
export default function (props: {
  children: React.ReactNode;
  element: React.ReactNode;
}) {
  return (
    <Drawer.Root>
      <Drawer.Trigger>{props.children}</Drawer.Trigger>
      <Drawer.Portal>
       
      <Drawer.Overlay className="fixed inset-0 bg-background/40 backdrop-blur-sm" />
        <Drawer.Content className="flex flex-col rounded-t-xl border-t h-min fixed bottom-0 w-full bg-card p-4 items-center overflow-hidden">
          <Drawer.Title className="hidden" />
          <figure className="mb-3 bg-foreground/50 rounded-full w-1/3 h-1" />

          {props.element}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
