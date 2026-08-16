export function Btn({
  children,
  variant = "primary",
  onClick,
  type = "button",
  disabled,
  className = "",
  style,
  ...props
}) {
  const variantClass =
    variant === "ghost"
      ? "btn-ghost"
      : variant === "outline"
        ? "btn-outline"
        : "btn-primary";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn ${variantClass} ${className}`.trim()}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
}
