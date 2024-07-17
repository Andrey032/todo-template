import "./Button.css";
export function Button({ className = null, name }) {
  return <button className={className}>{name}</button>;
}
