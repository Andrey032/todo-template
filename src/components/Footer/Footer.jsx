import './Footer.css';
import TasksFilter from '../TasksFilter/TasksFilter';
import PropTypes from 'prop-types';

function Footer({ countTask = 0, clearCompleted = () => {}, filter, onSwitchFilter = () => {} }) {
  return (
    <footer className="footer">
      <span className="todo-count">{countTask} items left</span>
      <TasksFilter filter={filter} onSwitchFilter={onSwitchFilter} />
      <button type="button" className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

Footer.propTypes = {
  countTask: PropTypes.number,
  clearCompleted: PropTypes.func,
  filter: PropTypes.string,
  onSwitchFilter: PropTypes.func,
};

export default Footer;
