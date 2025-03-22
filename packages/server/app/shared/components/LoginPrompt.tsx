import LoginButton from "./LoginButton";

interface IProps {
  img: string;
  title: string;
  description: string;
}

export default function (props: IProps) {
  return (
    <div className="flex flex-col items-center gap-y-4 p-4">
      <img
        src={props.img}
        alt="This is what a new token looks like"
        className="w-1/2"
      />

      <h1 className="font-bold text-xl">{props.title}</h1>

      <p className="text-foreground/70 text-center">
        {props.description}
      </p>

      <LoginButton className="bg-secondary self-stretch rounded-lg py-3 font-semibold duration-150 active:duration-75 active:scale-95"> 
        Register or Sign in
      </LoginButton>
    </div>
  );
}
