import React from "react";
import { v4 as uuidv4 } from "uuid";

import OptionGroup from "./OptionGroup";

export interface OptionProps {
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  inputType: "radio" | "checkbox";
  checked?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
}

function Option(props: OptionProps) {
  const {
    className = "",
    inputClassName = "",
    labelClassName = "",
    inputType = "radio",
    checked = undefined,
    disabled = false,
    onChange = null,
    children = null,
  } = props;

  const id = `option-${uuidv4()}`;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <input
        id={id}
        className={`${className} ${inputClassName}`}
        checked={checked}
        disabled={disabled}
        type={inputType}
        onChange={handleInputChange}
      />
      <label htmlFor={id} className={labelClassName}>
        {children}
      </label>
    </div>
  );
}

export default Option;
export { OptionGroup };
