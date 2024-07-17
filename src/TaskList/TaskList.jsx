import "./TaskList.css";
import { Task } from "../Task/Task.jsx";

export function TaskList({ date }) {
  return (
    <ul className="todo-list">
      <Task
        className="completed"
        description="Completed task"
        created={`created ${date}`}
      />
      <Task
        className="editing"
        description="Editing task"
        created="created 5 minutes ago"
      />
      <Task
        className="active"
        description="Active task"
        created="created 5 minutes ago"
      />
    </ul>
  );
}
