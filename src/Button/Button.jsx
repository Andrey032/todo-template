import "./Button.css";
export const Button = ({ className = null, name }) => {
  return <button className={className}>{name}</button>;
};
