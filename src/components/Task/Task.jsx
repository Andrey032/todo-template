import './Task.css';
import Input from '../Input/Input';
import { useState, useEffect, useCallback, useRef, memo } from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';
import KG from 'date-fns/locale/en-AU';

const Task = memo(
  ({
    description = '',
    minute,
    second,
    created = {},
    onRemove,
    onToggleDone,
    done = false,
    onToggleEdit,
    edit = false,
    onEditTask,
    setNewTime,
  }) => {
    const timeAddTask = formatDistanceToNow(created, {
      includeSeconds: true,
      locale: KG,
      addSuffix: true,
    });

    const [value, setValue] = useState('');
    const [isActiveTimer, setIsActiveTimer] = useState(false);
    const [secondTimerUp, setSecondTimerUp] = useState(0);
    const [secondTimer, setSecondTimer] = useState(second);
    const [minuteTimer, setMinuteTimer] = useState(minute);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const intervalId = useRef(null);

    let classNames;
    if (done) classNames = 'completed';
    if (edit) classNames = 'editing';

    const playTimer = () => {
      setIsActiveTimer(true);
    };

    const pauseTimer = () => {
      setIsActiveTimer(false);
    };

    const changeTimeFormat = (time) => {
      return String(time).length === 1 ? `0${time}` : String(time);
    };

    const increaseTimer = useCallback(() => {
      const secondCounter = secondTimerUp % 60;
      const minuteCounter = Math.floor(secondTimerUp / 60);
      const computedSecond = changeTimeFormat(secondCounter);
      const computedMinute = changeTimeFormat(minuteCounter);
      setNewTime(computedSecond, computedMinute);
      setSecondTimerUp((prevCounter) => prevCounter + 1);
    }, [secondTimerUp, setNewTime]);

    const decreaseTimer = useCallback(() => {
      const computedSecond = changeTimeFormat(secondTimer);
      const computedMinute = changeTimeFormat(minuteTimer);
      if (
        (computedMinute <= '00' && computedSecond <= '00') ||
        (computedMinute === '' && computedSecond <= '00') ||
        (computedMinute <= '00' && computedSecond === '')
      ) {
        setIsActiveTimer(false);
        setButtonDisabled(true);
      }
      if ((computedMinute > '00' && computedSecond === '00') || (computedMinute > '00' && computedSecond === '')) {
        setMinuteTimer((prevMinute) => String(prevMinute - 1));
        setSecondTimer('60');
      }
      setSecondTimer((prevSecond) => String(prevSecond - 1));
      setNewTime(computedSecond, computedMinute);
    }, [secondTimer, minuteTimer, setNewTime]);

    useEffect(() => {
      if (isActiveTimer) {
        intervalId.current = setInterval(() => {
          if ((minute === '' && second === '') || secondTimerUp !== 0) {
            increaseTimer();
          } else {
            decreaseTimer();
          }
        }, 1000);
      }
      return () => clearInterval(intervalId.current);
    }, [decreaseTimer, increaseTimer, isActiveTimer, minute, minuteTimer, second, secondTimer, secondTimerUp]);

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
                <button
                  type="button"
                  className="icon icon-play"
                  aria-label="воспроизвести"
                  onClick={playTimer}
                  disabled={buttonDisabled}
                />
                <button type="button" className="icon icon-pause" aria-label="остановить" onClick={pauseTimer} />
                {`${minute || '00'} : ${second || '00'}`}
              </span>
              <span className="description created">{`created ${timeAddTask}`}</span>
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
            <button type="submit" hidden>
              Отправить
            </button>
          </form>
        )}
      </li>
    );
  }
);
Task.propTypes = {
  description: PropTypes.string,
  created: PropTypes.instanceOf(Object),
  minute: PropTypes.string,
  second: PropTypes.string,
  done: PropTypes.bool,
  edit: PropTypes.bool,
};

export default Task;
