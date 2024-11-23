interface ILogoProps {
  className?: string;
}

export default function Logo(props: ILogoProps) {
  return (
    <>
      <img src="/logo.svg" alt="pumpfaxt logo" className={props.className} />
    </>
  );
}
