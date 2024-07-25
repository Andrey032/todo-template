import "./TaskList.css";
import { Task } from "../Task/Task.jsx";

export const TaskList = ({ data, onRemove }) => {
  return (
    <ul className="todo-list">
      {data.map((item) => {
        const { id, ...itemProps } = item;
        return (
          <Task
            key={id}
            {...itemProps}
            onRemove={() => onRemove(id)}
          />
        );
      })}
    </ul>
  );
};
