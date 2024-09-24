import React from "react";

import OptionGroup from "./OptionGroup";

export interface OptionProps {
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  inputType: "radio" | "checkbox";
  checked?: boolean;
  disabled?: boolean;
  onChangeInput?: () => void;
  onClickLabel?: () => void;
  children?: React.ReactNode;
}

function Option(props: OptionProps) {
  const {
    className = "",
    inputClassName = "",
    labelClassName = "",
    inputType = "radio",
    checked = false,
    disabled = false,
    onChangeInput = null,
    onClickLabel = null,
    children = null,
  } = props;

  const handleInputChange = () => {
    if (onChangeInput) {
      onChangeInput();
    }
  };

  const handleClickLabel = () => {
    if (onClickLabel) {
      onClickLabel();
    }
  };

  return (
    <div className="flex items-center gap-2">
      <input
        id="option"
        className={`${className} ${inputClassName}`}
        checked={checked}
        disabled={disabled}
        type={inputType}
        onChange={handleInputChange}
      />
      <label className={labelClassName} onClick={handleClickLabel}>
        {children}
      </label>
    </div>
  );
}

export default Option;
export { OptionGroup };
