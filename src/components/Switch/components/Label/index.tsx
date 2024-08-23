import React from "react";

interface LabelProps {
  className?: string;
  children?: React.ReactNode;
}

// NOTE: 使用 forwardRef 來取得 ref
const Label = React.forwardRef(
  (props: LabelProps, ref: React.Ref<HTMLSpanElement>) => {
    const { className, children } = props;

    const labelStyles = "text-xs flex-shrink-0";

    return (
      <span ref={ref} className={`${labelStyles} ${className}`}>
        {children}
      </span>
    );
  },
);

export default Label;
