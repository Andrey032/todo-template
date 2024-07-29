import "./NewTaskForm.css";
import Input from "../Input/Input";
import { useState } from "react";
export const NewTaskForm = ({ onAdd }) => {
  const [value, setValue] = useState("");

  function handleChange(evt) {
    setValue(evt.target.value);
  }

  function onSubmit(evt) {
    evt.preventDefault();
    onAdd(value);
    setValue("");
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
};
