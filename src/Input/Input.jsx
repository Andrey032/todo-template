import "./Input.css";
export default function Input(props) {
  const { done, ...propsItem } = props;
  return <input {...propsItem} checked={done} />;
}
