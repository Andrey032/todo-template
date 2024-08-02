import './TaskList.css';
import Task from '../Task/Task';
import PropTypes from 'prop-types';

function TaskList({
  data = [],
  onRemove = () => {},
  onToggleDone = () => {},
  onToggleEdit = () => {},
  onEditTask = () => {},
}) {
  return (
    <ul className="todo-list">
      {data.map((item) => {
        const { id, ...itemProps } = item;
        return (
          <Task
            key={id}
            {...itemProps}
            onRemove={() => onRemove(id)}
            onToggleDone={() => onToggleDone(id)}
            onToggleEdit={() => onToggleEdit(id)}
            onEditTask={(value) => onEditTask(id, value)}
          />
        );
      })}
    </ul>
  );
}
TaskList.propTypes = {
  data: PropTypes.instanceOf(Array),
  onRemove: PropTypes.func,
  onToggleDone: PropTypes.func,
  onToggleEdit: PropTypes.func,
  onEditTask: PropTypes.func,
};

export default TaskList;
