import "./Button.css";
export const Button = ({
  className,
  name,
  onSwitchFilter,
}) => {
  return (
    <button
      className={className}
      onClick={() => onSwitchFilter(name)}
    >
      {name}
    </button>
  );
};
