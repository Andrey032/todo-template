import "./Task.css";
import { useState } from "react";
import Input from "../Input/Input";

export const Task = ({
  description,
  created,
  onRemove,
  onToggleDone,
  done,
  onToggleEdit,
  edit,
  onEditTask,
}) => {
  const [value, setValue] = useState("");
  let classNames;

  if (done) {
    classNames = "completed";
  }

  if (edit) {
    classNames = "editing";
  }

  function handleChange(evt) {
    setValue(evt.target.value);
  }

  function onSubmitEditTask(evt) {
    evt.preventDefault();
    onEditTask(value);
  }

  return (
    <li className={classNames}>
      {!edit && (
        <>
          <div className="view">
            <Input
              className="toggle"
              type="checkbox"
              onChange={onToggleDone}
              name="toggle"
              done={done}
            />
            <label>
              <span className="description">
                {description}
              </span>
              <span className="created">{created}</span>
            </label>
            <button
              className="icon icon-edit"
              onClick={onToggleEdit}
              disabled={done}
            />
            <button
              className="icon icon-destroy"
              onClick={onRemove}
            />
          </div>
        </>
      )}
      {edit && (
        <form onSubmit={onSubmitEditTask}>
          <Input
            type="text"
            className="edit"
            value={value}
            onChange={handleChange}
            name="edit"
          />
        </form>
      )}
    </li>
  );
};
