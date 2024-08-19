import Input from '../Input/Input';
import { useEffect, useState } from 'react';
import './NewTaskForm.css';

function NewTaskForm({ onAdd = () => {} }) {
  const [currentValue, setCurentValue] = useState({
    task: '',
    minute: '',
    second: '',
  });

  useEffect(() => {
    const handleSubmit = (evt) => {
      if (evt.key === 'Enter') {
        evt.preventDefault();
        onAdd(currentValue);
        setCurentValue({
          task: '',
          minute: '',
          second: '',
        });
      }
    };
    window.addEventListener('keydown', handleSubmit);
    return () => {
      window.removeEventListener('keydown', handleSubmit);
    };
  }, [onAdd, currentValue]);

  const handleChangeTask = (evt) => {
    const { name, value } = evt.target;
    setCurentValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  return (
    <form className="new-todo-form">
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
    </form>
  );
}

export default NewTaskForm;
