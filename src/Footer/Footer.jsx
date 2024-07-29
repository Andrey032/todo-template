import "./Footer.css";
import { TasksFilter } from "../TasksFilter/TasksFilter.jsx";
export const Footer = ({
  countTask,
  clearCompleted,
  filter,
  onSwitchFilter,
}) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        {countTask} items left
      </span>
      <TasksFilter
        filter={filter}
        onSwitchFilter={onSwitchFilter}
      />
      <button
        className="clear-completed"
        onClick={clearCompleted}
      >
        Clear completed
      </button>
    </footer>
  );
};
