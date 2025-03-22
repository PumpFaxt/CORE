import { cn } from "../../../shared/utils/utils";

interface IProps {
  label: string;
  placeholder: string;
  field?: "input" | "textarea";
  type?: "text" | "number";
  symbol?: string;
  state: [string, React.Dispatch<React.SetStateAction<string>>];
}

export default function (props: IProps) {
  const { label, placeholder, symbol } = props;
  const type = props.type || "text";
  const field = props.field || "input";

  const [val, setVal] = props.state;

  const twInputStyle =
    "px-2 py-1 rounded border duration-150 focus:border-primary/50 placeholder:text-foreground/20 resize-none text-sm w-full";

  return (
    <div className="bg-card p-3 rounded-xl flex flex-col gap-y-2">
      <h2 className="text-sm text-foreground/80">{label}</h2>

      {field === "input" && (
        <div className="relative">
          <input
            className={cn(twInputStyle, symbol && "pl-4")}
            type={type}
            name={label}
            placeholder={placeholder}
            onChange={(e) => setVal(e.target.value)}
            id={label}
          />
          {symbol && (
            <figure className={cn("absolute top-1/2 -translate-y-1/2 text-foreground/20 left-2 text-sm", val && "text-foreground")}>
              {symbol}
            </figure>
          )}
        </div>
      )}

      {field === "textarea" && (
        <textarea
          rows={5}
          className={twInputStyle}
          name={label}
          placeholder={placeholder}
          id={label}
        />
      )}
    </div>
  );
}
