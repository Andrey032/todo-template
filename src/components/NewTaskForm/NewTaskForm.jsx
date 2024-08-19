import Input from '../Input/Input';
import { useState } from 'react';
import './NewTaskForm.css';

function NewTaskForm({ onAdd = () => {} }) {
  const [value, setValue] = useState('');

  const handleChange = (evt) => {
    setValue(evt.target.value);
  };

  function onSubmit(evt) {
    evt.preventDefault();
    onAdd(value);
    setValue('');
  }

  return (
    <form onSubmit={onSubmit} className="new-todo-form">
      <Input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        name="new-todo"
        value={value}
        onChange={handleChange}
      />
      {/* <Input className="new-todo-form__timer" placeholder="Min" name="min" defaultValue="1" />
      <Input className="new-todo-form__timer" placeholder="Sec" name="sec" defaultValue="2" /> */}
    </form>
  );
}

export default NewTaskForm;
