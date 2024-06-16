import React, { useEffect, useMemo } from "react";

enum ButtonType {
  default = "default",
  primary = "primary",
  text = "text",
  link = "link",
}

interface ButtonProps {
  text?: string;
  type?:
    | ButtonType.default
    | ButtonType.primary
    | ButtonType.text
    | ButtonType.link
    | string;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
}

function Button(props: ButtonProps) {
  const {
    text = "",
    type = ButtonType.default,
    disabled = false,
    loading = false,
    icon = null,
  } = props;

  const typeClassName = useMemo(() => {
    const baseStyles = "h-8 w-fit px-5 py-2 text-center text-xs rounded-xl";
    const defaultStyles = " border border-secondary bg-white text-text";
    const primaryStyles = "bg-primary text-white";
    const textStyles = "text-text";
    const linkStyles = "text-primary";

    if (type === ButtonType.default) {
      return [baseStyles, defaultStyles].join(" ");
    }
    if (type === ButtonType.primary) {
      return [baseStyles, primaryStyles].join(" ");
    }
    if (type === ButtonType.text) {
      return [baseStyles, textStyles].join(" ");
    }
    if (type === ButtonType.link) {
      return [baseStyles, linkStyles].join(" ");
    }

    return [baseStyles, defaultStyles].join(" ");
  }, [type]);

  useEffect(() => {
    console.log("button props: ", type, disabled, loading, icon);
  }, []);

  return <button className={typeClassName}>{text}</button>;
}

export default Button;
