import { ReactElement } from "react";

import { OptionGroup } from "../Option";
import { CheckboxProps } from ".";

interface CheckboxGroupProps<T> {
  className?: string;
  disabled?: boolean;
  values?: T[];
  children?: ReactElement<CheckboxProps<T>>[];
  onChange?: (value: T[] | undefined) => void;
}

function CheckboxGroup<K>(props: CheckboxGroupProps<K>) {
  const {
    className = "",
    disabled = false,
    values = undefined,
    children = [],
    onChange = null,
  } = props;

  const deepEqual = (a: K | undefined, b: K | undefined) =>
    JSON.stringify(a) === JSON.stringify(b);

  const handleChange = (value: K | undefined) => {
    if (onChange) {
      const isExist = values?.some((el) => deepEqual(el, value));

      if (values?.length) {
        return isExist
          ? onChange(values?.filter((val) => !deepEqual(val, value)))
          : onChange(values?.concat(value ?? []));
      }

      return onChange(value ? [value] : []);
    }
  };

  return (
    <OptionGroup
      className={className}
      disabled={disabled}
      value={values}
      children={children}
      onChange={handleChange}
    />
  );
}

export default CheckboxGroup;
