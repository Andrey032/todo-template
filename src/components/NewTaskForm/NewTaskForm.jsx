import Input from '../Input/Input';
import { memo, useState } from 'react';
import './NewTaskForm.css';

const NewTaskForm = memo(({ onAdd = () => {} }) => {
  const [currentValue, setCurentValue] = useState('');
  const [time, setTime] = useState({
    minute: '',
    second: '',
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onAdd(currentValue, time);
    setCurentValue('');
    setTime({
      minute: '',
      second: '',
    });
  };

  const handleChangeTime = (evt) => {
    const { name, value } = evt.target;
    setTime((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleChangeTask = (evt) => {
    setCurentValue(evt.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="new-todo-form">
      <Input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        name="task"
        value={currentValue}
        onChange={handleChangeTask}
      />
      <Input
        className="new-todo-form__timer"
        placeholder="Min"
        name="minute"
        value={time.minute}
        onChange={handleChangeTime}
        maxLength="2"
        pattern="[0-9]{1,2}"
      />
      <Input
        className="new-todo-form__timer"
        placeholder="Sec"
        name="second"
        value={time.second}
        onChange={handleChangeTime}
        maxLength="2"
        pattern="[0-9]{1,2}"
      />
      <button type="submit" hidden>
        Отправить
      </button>
    </form>
  );
});

export default NewTaskForm;
