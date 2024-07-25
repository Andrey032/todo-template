import { Button } from "../Button/Button.jsx";
import "./TasksFilter.css";

export const TasksFilter = () => {
  return (
    <ul className="filters">
      <li>
        <Button className="selected" name={"All"} />
      </li>
      <li>
        <Button name={"Active"} />
      </li>
      <li>
        <Button name={"Completed"} />
      </li>
    </ul>
  );
};
