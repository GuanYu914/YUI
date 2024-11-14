import React, { useMemo } from "react";

import Option from "../Option";
import CheckboxGroup from "./CheckboxGroup";

export interface CheckboxProps<T> {
  className?: string;
  checked?: boolean;
  disabled?: boolean;
  value?: T;
  children?: React.ReactNode;
  onChange?: (value: T | undefined) => void;
}

function Checkbox<K>(props: CheckboxProps<K>) {
  const {
    className = "",
    checked = undefined,
    disabled = false,
    value = undefined,
    children = null,
    onChange = null,
  } = props;

  const inputClassName = useMemo(() => {
    let styles =
      "appearance-none w-5 h-5 border-2 border-secondary cursor-pointer checked:border-4 checked:border-primary hover:border-primary transition-colors duration-300 ";

    if (disabled) {
      styles = styles.concat(
        " [&]:border-secondary [&]:cursor-not-allowed [&]:hover:border-secondary [&]:checked:border-secondary",
      );
    }

    return styles;
  }, [disabled]);

  const labelClassName = useMemo(() => {
    let styles = "text-xs text-text cursor-pointer";

    if (disabled) {
      styles = styles.concat(" text-text/40 [&]:cursor-not-allowed");
    }

    return styles;
  }, [disabled]);

  const handleInputChange = () => {
    if (disabled) return;

    if (onChange) {
      onChange(value);
    }
  };

  return (
    <Option
      className={className}
      inputClassName={inputClassName}
      labelClassName={labelClassName}
      inputType="checkbox"
      checked={checked}
      disabled={disabled}
      onChange={handleInputChange}
    >
      {children}
    </Option>
  );
}

export default Checkbox;
export { CheckboxGroup };
