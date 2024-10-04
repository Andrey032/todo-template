import { memo } from 'react';
import './Input.css';

const Input = memo((props) => {
  const { done, ...propsItem } = props;
  return <input {...propsItem} checked={done} />;
});

export default Input;
