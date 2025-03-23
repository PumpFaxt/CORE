import api from "../../shared/hooks/api";

export default function () {
  const { data: user } = api.useUserSelfInfo();

  return (
    <div className="flex flex-col p-4">
      <div className="w-1/5 bg-card">
        <img src="https://pngimg.com/d/wojak_PNG109613.png" />
      </div>
    </div>
  );
}
