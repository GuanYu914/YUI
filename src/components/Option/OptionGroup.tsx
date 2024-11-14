import { Children, cloneElement, isValidElement, ReactElement } from "react";

import { RadioProps } from "../Radio";
import { CheckboxProps } from "../Checkbox";

interface OptionGroupProps<T> {
  className?: string;
  disabled?: boolean;
  value?: T | T[];
  children?: ReactElement<RadioProps<T> | CheckboxProps<T>>[];
  onChange?: (value: T | undefined) => void;
}

function OptionGroup<K>(props: OptionGroupProps<K>) {
  const {
    className = "",
    disabled = false,
    value = undefined,
    children = null,
    onChange = null,
  } = props;

  const deepEqual = (a: K | undefined, b: K | undefined) =>
    JSON.stringify(a) === JSON.stringify(b);

  const handleChange = (value: K | undefined) => {
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className={className}>
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          if (Array.isArray(value)) {
            return cloneElement(child, {
              ...child.props,
              checked: child.props.value
                ? value.some((el) => deepEqual(el, child.props.value))
                : false,
              disabled,
              onChange: () => handleChange(child.props.value),
            });
          }

          return cloneElement(child, {
            ...child.props,
            checked: deepEqual(value, child.props.value),
            disabled,
            onChange: () => handleChange(child.props.value),
          });
        }
      })}
    </div>
  );
}

export default OptionGroup;
