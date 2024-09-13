/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  Children,
  cloneElement,
  isValidElement,
  ReactElement,
} from "react";
import { RadioProps } from ".";

interface RadioGroupProps {
  className?: string;
  disabled?: boolean;
  value?: any;
  children?: ReactElement<RadioProps>[];
  onChange?: (value: any) => void;
}

function RadioGroup(props: RadioGroupProps) {
  const {
    className = "",
    disabled = false,
    value,
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

export default RadioGroup;
