import { useState } from "react";
import "./Task.css";

export const Task = ({
  description,
  created,
  onRemove,
}) => {
  const [done, setDone] = useState(false);
  const [edit, setEdit] = useState(false);

  let classNames = "active";

  function onDone() {
    setDone((prev) => !prev);
  }

  if (done) {
    classNames += " completed";
  }

  function onEdit() {
    setEdit((prev) => !prev);
  }

  if (edit) {
    classNames += " editing";
  }

  return (
    <li className={classNames}>
      {!edit && (
        <>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              onClick={onDone}
            />
            <label>
              <span className="description">
                {description}
              </span>
              <span className="created">{created}</span>
            </label>
            <button
              className="icon icon-edit"
              onClick={onEdit}
            />
            <button
              className="icon icon-destroy"
              onClick={onRemove}
            />
          </div>
        </>
      )}
      {edit && (
        <input
          type="text"
          className="edit"
          defaultValue="Editing task"
        />
      )}
    </li>
  );
};
