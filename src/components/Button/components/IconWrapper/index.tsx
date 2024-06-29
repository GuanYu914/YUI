import React from "react";

interface IconWrapperProps {
  children: React.ReactNode;
}

function IconWrapper(props: IconWrapperProps) {
  const { children } = props;

  return <span>{children}</span>;
}

export default IconWrapper;
