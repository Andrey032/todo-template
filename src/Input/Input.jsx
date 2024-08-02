import './Input.css';

function Input(props) {
  const { done, ...propsItem } = props;
  return <input {...propsItem} checked={done} />;
}

export default Input;
