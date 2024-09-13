/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useMemo, useState } from "react";

import RadioGroup from "./RadioGroup";

export interface RadioProps {
  className?: string;
  checked?: boolean;
  disabled?: boolean;
  value?: any;
  children?: React.ReactNode;
  onChange?: (value: any) => void;
}

function Radio(props: RadioProps) {
  const {
    className = "",
    checked = false,
    disabled = false,
    value = null,
    children = null,
    onChange = null,
  } = props;

  const [_checked, _setChecked] = useState(checked);

  const inputClassName = useMemo(() => {
    let styles =
      "appearance-none w-5 h-5 border-2 border-secondary rounded-full cursor-pointer checked:border-4 checked:border-primary hover:border-primary transition-colors duration-300 ";

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

    _setChecked(!_checked);

    if (onChange) {
      onChange(value);
    }
  };

  const handleClickLabel = () => {
    if (disabled) return;
    if (_checked) return;

    _setChecked(!_checked);

    if (onChange) {
      onChange(value);
    }
  };

  useEffect(() => {
    _setChecked(checked);
  }, [checked]);

  return (
    <div className="flex items-center gap-2">
      <input
        id="radio"
        className={`${className} ${inputClassName}`}
        checked={_checked}
        disabled={disabled}
        type="radio"
        onChange={handleInputChange}
      />
      <label className={labelClassName} onClick={handleClickLabel}>
        {children}
      </label>
    </div>
  );
}

export default Radio;
export { RadioGroup };
