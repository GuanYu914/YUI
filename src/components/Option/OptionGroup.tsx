/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  Children,
  cloneElement,
  isValidElement,
  ReactElement,
} from "react";
import { RadioProps } from "../Radio";

interface OptionGroup<T> {
  className?: string;
  disabled?: boolean;
  value?: T;
  children?: ReactElement<RadioProps<T>>[];
  onChange?: (value: T | undefined) => void;
}

function OptionGroup<K>(props: OptionGroup<K>) {
  const {
    className = "",
    disabled = false,
    value = undefined,
    children = null,
    onChange = null,
  } = props;

  const handleChange = (value: any) => {
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className={className}>
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, {
            ...child.props,
            mode: "group",
            checked: child.props.value === value,
            disabled,
            groupValue: value,
            onChange: handleChange,
          });
        }
      })}
    </div>
  );
}

export default OptionGroup;
