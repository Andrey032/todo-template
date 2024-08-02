import './Button.css';

function Button({ className, name, onSwitchFilter }) {
  return (
    <button type="button" className={className} onClick={() => onSwitchFilter(name)}>
      {name}
    </button>
  );
}

export default Button;
