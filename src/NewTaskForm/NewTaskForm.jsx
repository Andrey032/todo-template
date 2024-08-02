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
    <form onSubmit={onSubmit}>
      <Input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        name="new-todo"
        value={value}
        onChange={handleChange}
      />
    </form>
  );
}

export default NewTaskForm;
