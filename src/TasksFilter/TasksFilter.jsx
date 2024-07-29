import "./TasksFilter.css";
import { Button } from "../Button/Button.jsx";

const buttons = [
  { name: "All" },
  { name: "Active" },
  { name: "Completed" },
];

export const TasksFilter = ({ filter, onSwitchFilter }) => {
  return (
    <ul className="filters">
      {buttons.map(({ name }) => {
        const isActive = filter === name;
        return (
          <li key={name}>
            <Button
              name={name}
              className={isActive ? "selected" : undefined}
              onSwitchFilter={onSwitchFilter}
            />
          </li>
        );
      })}
    </ul>
  );
};
