import './TasksFilter.css';
import Button from '../Button/Button';
import buttonsArr from '../../utils/constants';
import { memo } from 'react';

const TasksFilter = memo(({ filter = 'All', onSwitchFilter }) => {
  return (
    <ul className="filters">
      {buttonsArr.map(({ name }) => {
        const isActive = filter === name ? 'selected' : null;
        return (
          <li key={name}>
            <Button name={name} className={isActive} onSwitchFilter={onSwitchFilter} />
          </li>
        );
      })}
    </ul>
  );
});

export default TasksFilter;
