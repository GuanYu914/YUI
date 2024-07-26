import React, { useEffect, useMemo } from "react";

import IconWrapper from "./components/IconWrapper";

enum ButtonType {
  default = "default",
  primary = "primary",
  text = "text",
  link = "link",
}

interface ButtonProps {
  className?: string;
  text?: string;
  type?:
    | `${ButtonType.default}`
    | `${ButtonType.primary}`
    | `${ButtonType.text}`
    | `${ButtonType.link}`;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
}

function Button(props: ButtonProps) {
  const {
    className = "",
    text = "",
    type = ButtonType.default,
    disabled = false,
    loading = false,
    icon = null,
  } = props;

  const typeClassName = useMemo(() => {
    const baseStyles =
      "min-h-8 gap-1 inline-flex flex-auto items-center w-fit px-5 py-2 text-center text-xs rounded-xl hover:ease-in-out duration-300";

    const defaultBasicStyles = "border border-secondary bg-white text-text";
    const defaultHoverStyles = "hover:text-primary hover:border-primary";
    const defaultDisabledStyles =
      "[&]:bg-secondary [&]:bg-opacity-30 border-secondary text-text text-opacity-40 cursor-not-allowed";

    const primaryBasicStyles = "bg-primary text-white";
    const primaryHoverStyles = "hover:opacity-80";
    const primaryDisabledStyles =
      "bg-secondary bg-opacity-30 border border-secondary [&]:text-text [&]:text-opacity-40 cursor-not-allowed";

    const textBasicStyles = "text-text";
    const textHoverStyles = "hover:bg-secondary";
    const textDisabledStyles = "text-opacity-40 cursor-not-allowed";

    const linkBasicStyles = "text-primary hover:opacity-80";
    const linkHoverStyles = "hover:opacity-80";
    const linkDisabledStyles = "text-opacity-40 text-text cursor-not-allowed";

    if (type === ButtonType.default && !disabled) {
      return [baseStyles, defaultBasicStyles, defaultHoverStyles].join(" ");
    }
    if (type === ButtonType.default && disabled) {
      return [baseStyles, defaultBasicStyles, defaultDisabledStyles].join(" ");
    }
    if (type === ButtonType.primary && !disabled) {
      return [baseStyles, primaryBasicStyles, primaryHoverStyles].join(" ");
    }
    if (type === ButtonType.primary && disabled) {
      return [baseStyles, primaryBasicStyles, primaryDisabledStyles].join(" ");
    }
    if (type === ButtonType.text && !disabled) {
      return [baseStyles, textBasicStyles, textHoverStyles].join(" ");
    }
    if (type === ButtonType.text && disabled) {
      return [baseStyles, textBasicStyles, textDisabledStyles].join(" ");
    }
    if (type === ButtonType.link && !disabled) {
      return [baseStyles, linkBasicStyles, linkHoverStyles].join(" ");
    }
    if (type === ButtonType.link && disabled) {
      return [baseStyles, linkBasicStyles, linkDisabledStyles].join(" ");
    }

    return [baseStyles, defaultBasicStyles, defaultHoverStyles].join(" ");
  }, [type, disabled]);

  useEffect(() => {
    console.log("button props: ", props);
  }, [props]);

  return (
    <button className={`${className} ${typeClassName}`}>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      {text}
    </button>
  );
}

export default Button;
