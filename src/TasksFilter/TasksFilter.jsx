import './TasksFilter.css';
import Button from '../Button/Button';

const buttons = [{ name: 'All' }, { name: 'Active' }, { name: 'Completed' }];

function TasksFilter({ filter = 'All', onSwitchFilter }) {
  return (
    <ul className="filters">
      {buttons.map(({ name }) => {
        const isActive = filter === name;
        return (
          <li key={name}>
            <Button name={name} className={isActive ? 'selected' : undefined} onSwitchFilter={onSwitchFilter} />
          </li>
        );
      })}
    </ul>
  );
}

export default TasksFilter;
