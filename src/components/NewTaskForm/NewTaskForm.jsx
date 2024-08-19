import Input from '../Input/Input';
import { useState } from 'react';
import './NewTaskForm.css';

function NewTaskForm({ onAdd = () => {} }) {
  const [currentValue, setCurentValue] = useState({
    task: '',
    minute: '',
    second: '',
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onAdd(currentValue);
    setCurentValue({
      task: '',
      minute: '',
      second: '',
    });
  };

  const handleChangeTask = (evt) => {
    const { name, value } = evt.target;
    setCurentValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="new-todo-form">
      <Input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        name="task"
        value={currentValue.task}
        onChange={handleChangeTask}
      />
      <Input
        className="new-todo-form__timer"
        placeholder="Min"
        name="minute"
        value={currentValue.minute}
        onChange={handleChangeTask}
      />
      <Input
        className="new-todo-form__timer"
        placeholder="Sec"
        name="second"
        value={currentValue.second}
        onChange={handleChangeTask}
      />
      <button type="submit" hidden>
        Отправить
      </button>
    </form>
  );
}

export default NewTaskForm;
