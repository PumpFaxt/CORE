export default function FormatAddress(props: { address: string }) {
  return (
    <span>
      {props.address.slice(0, 5 + 2) + "..." +
        props.address.slice(props.address.length - 5, props.address.length)}
    </span>
  );
}
