import { usePrivy } from "@privy-io/react-auth";

export default function () {
  const privy = usePrivy();

  return (
    <div>
      hihi
      <button className="bg-teal-400 p-4 rounded-md">Hello</button>
    </div>
  );
}
