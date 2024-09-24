/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactElement } from "react";

import { OptionGroup } from "../Option";
import { RadioProps } from ".";

interface RadioGroupProps<T> {
  className?: string;
  disabled?: boolean;
  value?: T;
  children?: ReactElement<RadioProps<T>>[];
  onChange?: (value: T | undefined) => void;
}

function RadioGroup<K>(props: RadioGroupProps<K>) {
  const {
    className = "",
    disabled = false,
    value = undefined,
    children = [],
    onChange = null,
  } = props;

  const handleChange = (value: any) => {
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <OptionGroup
      className={className}
      disabled={disabled}
      value={value}
      children={children}
      onChange={handleChange}
    />
  );
}

export default RadioGroup;
