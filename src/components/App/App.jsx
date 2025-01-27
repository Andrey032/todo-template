import './App.css';
import Main from '../Main/Main';
import TaskList from '../TaskList/TaskList';
import NewTaskForm from '../NewTaskForm/NewTaskForm';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { useCallback, useMemo, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('All');
  const [index, setIndex] = useState(1);

  const unfinishedTasksCounter = useMemo(() => data.filter((el) => el.done === false).length, [data]);

  const onAdd = useCallback(
    (value, time) => {
      const { minute, second } = time;
      if (!value.trim()) return;
      const newItem = {
        id: index,
        description: value,
        minute: minute.length === 1 ? `0${minute}` : minute,
        second: second.length === 1 ? `0${second}` : second,
        created: new Date(),
        done: false,
        edit: false,
      };
      setData((prevData) => [...prevData, newItem]);
      setIndex((prev) => prev + 1);
    },
    [index]
  );

  const toggleProperty = (arr, id, propName, ...otherProp) => {
    const [description, value] = otherProp;
    const idx = arr.findIndex((el) => el.id === id);
    const oldObj = arr[idx];
    const newObj = {
      ...oldObj,
      [description]: value,
      [propName]: !oldObj[propName],
    };
    setData((prevArr) => prevArr.with(idx, newObj));
  };

  const onRemove = useCallback((id) => setData((prevData) => prevData.filter((el) => el.id !== id)), []);

  const onToggleDone = useCallback(
    (id) => {
      toggleProperty(data, id, 'done');
    },
    [data]
  );

  const onToggleEdit = useCallback(
    (id) => {
      toggleProperty(data, id, 'edit');
    },
    [data]
  );

  const onEditTask = useCallback(
    (id, value) => {
      toggleProperty(data, id, 'edit', 'description', value);
    },
    [data]
  );

  const clearCompleted = useCallback(() => {
    setData((prevData) => prevData.filter((el) => !el.done));
  }, []);

  const filterSwitch = (items, filterStr) => {
    if (filterStr === 'All') return items;
    if (filterStr === 'Active') return items.filter((el) => !el.done);
    if (filterStr === 'Completed') return items.filter((el) => el.done);
    return items;
  };

  const visibleItems = useMemo(() => filterSwitch(data, filter), [data, filter]);
  const onSwitchFilter = useCallback((filterStr) => setFilter(filterStr), []);

  const setNewTime = useCallback(
    (id, second, minute) => {
      const idx = data.findIndex((el) => el.id === id);
      const oldObj = data[idx];
      const newObject = {
        ...oldObj,
        second,
        minute,
      };
      setData((prevArr) => prevArr.with(idx, newObject));
    },
    [data]
  );

  return (
    <section className="todoapp">
      <Header>
        <NewTaskForm onAdd={onAdd} />
      </Header>
      <Main>
        <TaskList
          data={visibleItems}
          onRemove={onRemove}
          onToggleDone={onToggleDone}
          onToggleEdit={onToggleEdit}
          onEditTask={onEditTask}
          setNewTime={setNewTime}
        />
      </Main>
      <Footer
        countTask={unfinishedTasksCounter}
        clearCompleted={clearCompleted}
        filter={filter}
        onSwitchFilter={onSwitchFilter}
      />
    </section>
  );
}

export default App;
