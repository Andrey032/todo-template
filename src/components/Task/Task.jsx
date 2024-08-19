import './Task.css';
import Input from '../Input/Input';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';
import KG from 'date-fns/locale/en-AU';

function Task({
  description = '',
  created = {},
  onRemove,
  onToggleDone,
  done = false,
  onToggleEdit,
  edit = false,
  onEditTask,
}) {
  const timeAddTask = formatDistanceToNow(created, {
    includeSeconds: true,
    locale: KG,
    addSuffix: true,
  });

  const [value, setValue] = useState('');
  let classNames;
  if (done) classNames = 'completed';
  if (edit) classNames = 'editing';

  const handleChange = (evt) => {
    setValue(evt.target.value);
  };

  const onSubmitEditTask = (evt) => {
    evt.preventDefault();
    onEditTask(value);
  };

  return (
    <li className={classNames}>
      {!edit && (
        <div className="view">
          <Input className="toggle" type="checkbox" onChange={onToggleDone} name="toggle" done={done} />
          <label>
            <span className="title">{description}</span>
            <span className="description">
              <button type="button" className="icon icon-play" aria-label="воспроизвести" />
              <button type="button" className="icon icon-pause" aria-label="остановить" />
              12:25
            </span>
            <span className="description">{`created ${timeAddTask}`}</span>
          </label>
          <button
            type="button"
            aria-label="кнопка для редактирования"
            className="icon icon-edit"
            onClick={onToggleEdit}
            disabled={done}
          />
          <button type="button" aria-label="кнопка для удаления" className="icon icon-destroy" onClick={onRemove} />
        </div>
      )}
      {edit && (
        <form onSubmit={onSubmitEditTask}>
          <Input type="text" className="edit" value={value} onChange={handleChange} name="edit" autoFocus />
        </form>
      )}
    </li>
  );
}
Task.propTypes = {
  description: PropTypes.string,
  created: PropTypes.instanceOf(Object),
  done: PropTypes.bool,
  edit: PropTypes.bool,
};

export default Task;
