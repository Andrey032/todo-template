import { TasksFilter } from "../TasksFilter/TasksFilter.jsx";
import "./Footer.css";
export const Footer = () => {
  return (
    <footer className="footer">
      <span className="todo-count">1 items left</span>
      <TasksFilter />
      <button className="clear-completed">
        Clear completed
      </button>
    </footer>
  );
};
