import React, { useMemo } from "react";

import IconWrapper from "./components/IconWrapper";
import LoadingIcon from "./components/loadingIcon";

enum ButtonType {
  default = "default",
  primary = "primary",
  text = "text",
  link = "link",
}

interface ButtonProps {
  className?: string;
  text?: string;
  type?: "default" | "primary" | "text" | "link";
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
      "[&]:bg-secondary/30 border-secondary text-text/40 cursor-not-allowed";
    const defaultLoadingStyles = " text-text/40";

    const primaryBasicStyles = "bg-primary text-white";
    const primaryHoverStyles = "hover:opacity-80";
    const primaryDisabledStyles =
      "bg-secondary/30 border border-secondary [&]:text-text/40 cursor-not-allowed";
    const primaryLoadingStyles = "bg-primary/80";

    const textBasicStyles = "text-text";
    const textHoverStyles = "hover:bg-secondary";
    const textDisabledStyles = "text-text/40 cursor-not-allowed";
    const textLoadingStyles = "text-text/40";

    const linkBasicStyles = "text-primary hover:opacity-80";
    const linkHoverStyles = "hover:opacity-80";
    const linkDisabledStyles = "text-text/40 cursor-not-allowed";
    const linkLoadingStyles = "text-primary/80";

    if (type === ButtonType.default) {
      let styles = [baseStyles, defaultBasicStyles, defaultHoverStyles];

      if (loading) {
        styles = styles.concat(defaultLoadingStyles);
      }
      if (disabled) {
        styles = styles
          .concat(defaultDisabledStyles)
          .filter((style) => !style.includes(defaultHoverStyles));
      }

      return styles.join(" ");
    }
    if (type === ButtonType.primary) {
      let styles = [baseStyles, primaryBasicStyles, primaryHoverStyles];

      if (loading) {
        styles = styles.concat(primaryLoadingStyles);
      }
      if (disabled) {
        styles = styles
          .concat(primaryDisabledStyles)
          .filter((style) => !style.includes(primaryHoverStyles));
      }

      return styles.join(" ");
    }
    if (type === ButtonType.text) {
      let styles = [baseStyles, textBasicStyles, textHoverStyles];

      if (loading) {
        styles = styles.concat(textLoadingStyles);
      }
      if (disabled) {
        styles = styles
          .concat(textDisabledStyles)
          .filter((style) => !style.includes(textHoverStyles));
      }

      return styles.join(" ");
    }
    if (type === ButtonType.link) {
      let styles = [baseStyles, linkBasicStyles, linkHoverStyles];

      if (loading) {
        styles = styles.concat(linkLoadingStyles);
      }
      if (disabled) {
        styles = styles
          .concat(linkDisabledStyles)
          .filter((style) => !style.includes(linkHoverStyles));
      }

      return styles.join(" ");
    }

    return [baseStyles, defaultBasicStyles, defaultHoverStyles].join(" ");
  }, [type, loading, disabled]);

  const colorOfLoadingIcon = useMemo(
    () => (type === ButtonType.primary && !disabled ? "white" : "primary"),
    [type, disabled],
  );

  return (
    <button className={`${className} ${typeClassName}`}>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      {text}
      {loading && <LoadingIcon color={colorOfLoadingIcon} />}
    </button>
  );
}

export default Button;
