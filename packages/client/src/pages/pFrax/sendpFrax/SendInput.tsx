import FlexSeparator from "../../../shared/components/FlexSeparator.tsx";

export default function SendInput() {
  return (
    <div className="bg-foreground/5 px-4 py-4 rounded-sm flex flex-col">
      <p className="text-sm">Recipient</p>
      <FlexSeparator size="md" />
      <div className="flex items-center">
        <div className="bg-background w-16 aspect-square rounded-full " />
        <FlexSeparator size="md" />
        <input
          placeholder="Enter Address"
          className="text-sm bg-transparent outline-none"
        />
        <FlexSeparator size="md" />
        <button className="bg-foreground/10 h-max px-3 rounded-lg text-sm text-black font-semibold">
          Paste
        </button>
      </div>
    </div>
  );
}
