import React, { useEffect, useMemo } from "react";

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
    className = "",
    text = "",
    type = ButtonType.default,
    disabled = false,
    loading = false,
    icon = null,
  } = props;

  const typeClassName = useMemo(() => {
    const baseStyles = "h-8 w-fit px-5 py-2 text-center text-xs rounded-xl";
    const defaultStyles =
      " border border-secondary bg-white text-text hover:text-primary hover:border-primary hover:ease-in-out duration-300";
    const primaryStyles =
      "bg-primary text-white hover:opacity-80 hover:ease-in-out duration-300";
    const textStyles =
      "text-text hover:bg-secondary hover:ease-linear duration-300";
    const linkStyles =
      "text-primary hover:opacity-80 hover:ease-in-out duration-300";

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
    console.log("button props: ", props);
  }, [props]);

  return <button className={`${className} ${typeClassName}`}>{text}</button>;
}

export default Button;
