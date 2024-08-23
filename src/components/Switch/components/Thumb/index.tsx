import React from "react";

export const THUMB_SIZE = 28;

interface ThumbProps {
  className?: string;
}

function Thumb(props: ThumbProps) {
  const { className } = props;

  const thumbStyles = "inline-block rounded-full bg-white flex-shrink-0";

  return (
    <div
      style={{ width: `${THUMB_SIZE}px`, height: `${THUMB_SIZE}px` }}
      className={`${thumbStyles} ${className}`}
    />
  );
}

export default Thumb;
