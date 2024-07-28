import inputMask, { MaskTypes } from "@/utils/inpurtMask";
import { Input } from "../ui/input";

type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  maskType: MaskTypes;
};

export function InputMask({ maskType, onChange, ...props }: TextInputProps) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (maskType) {
      const mask = inputMask[maskType];
      event.currentTarget.value = mask(event);
    }

    if (typeof onChange === "function") {
      onChange(event);
    }
  }

  return <Input {...props} type="text" onChange={handleChange} />;
}
