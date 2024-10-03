import './TaskList.css';
import Task from '../Task/Task';
import PropTypes from 'prop-types';
import { memo } from 'react';

const TaskList = memo(
  ({
    data = [],
    onRemove = () => {},
    onToggleDone = () => {},
    onToggleEdit = () => {},
    onEditTask = () => {},
    setNewTime = () => {},
  }) => {
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
              setNewTime={(second, minute) => setNewTime(id, second, minute)}
            />
          );
        })}
      </ul>
    );
  }
);

TaskList.propTypes = {
  data: PropTypes.instanceOf(Array),
  onRemove: PropTypes.func,
  onToggleDone: PropTypes.func,
  onToggleEdit: PropTypes.func,
  onEditTask: PropTypes.func,
};

export default TaskList;
