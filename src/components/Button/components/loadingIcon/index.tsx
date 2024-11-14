interface LoadingIconProps {
  color?: "primary" | "white";
}

function LoadingIcon(props: LoadingIconProps) {
  const { color = "primary" } = props;

  return (
    <>
      {color === "primary" && (
        <div className="primary-loader animate-loading"></div>
      )}
      {color === "white" && (
        <div className="white-loader animate-loading"></div>
      )}
    </>
  );
}

export default LoadingIcon;
