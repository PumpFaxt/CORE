import { useRef, useState } from "preact/hooks";

type InputProps = {
  length?: number;
  onComplete: (pin: string) => void;
};

export default function OtpInput({ length = 4, onComplete }: InputProps) {
  const inputRef = useRef<HTMLInputElement[]>(Array(length).fill(null));

  const [OTP, setOTP] = useState<string[]>(Array(length).fill(""));

  const handleTextChange = (input: string, index: number) => {
    const newPin = [...OTP];
    newPin[index] = input;
    setOTP(newPin);

    if (input.length === 1 && index < length - 1) {
      inputRef.current[index + 1]?.focus();
    }
    if (input.length === 0 && index > 0) {
      inputRef.current[index - 1]?.focus();
    }

    if (newPin.every((digit) => digit !== "")) {
      onComplete(newPin.join(""));
    }
  };

  return (
    <div className={"flex gap-x-5"}>
      {Array.from({ length }, (_, index) => (
        <input
          key={index}
          type="number"
          maxLength={1}
          value={OTP[index]}
          onChange={(e) => handleTextChange(e.currentTarget.value, index)}
          ref={(
            ref,
          ) => (inputRef.current[index] = ref as HTMLInputElement)}
          className={"border flex-1 text-center text-lg focus:saturate-200 focus:border-primary p-5 outline-none focus:motion-preset-pop motion-duration-150"}
          onKeyDown={(e) => {
            if (e.key === "backspace") {
              inputRef.current[index].value = "";
              inputRef.current[index - 1]?.focus();
            }
          }}
        />
      ))}
    </div>
  );
}
