import './App.css';
import Main from '../Main/Main';
import TaskList from '../TaskList/TaskList';
import NewTaskForm from '../NewTaskForm/NewTaskForm';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('All');
  const [index, setIndex] = useState(1);

  const unfinishedTasksCounter = data.filter((el) => el.done === false).length;

  const onRemove = (id) => setData((prevData) => prevData.filter((el) => el.id !== id));

  const onAdd = (value, time) => {
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
  };

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

  const onToggleDone = (id) => {
    toggleProperty(data, id, 'done');
  };

  const onToggleEdit = (id) => {
    toggleProperty(data, id, 'edit');
  };

  const onEditTask = (id, value) => {
    toggleProperty(data, id, 'edit', 'description', value);
  };

  const clearCompleted = () => {
    setData((prevData) => prevData.filter((el) => !el.done));
  };

  const filterSwitch = (items, filterStr) => {
    if (filterStr === 'All') return items;
    if (filterStr === 'Active') return items.filter((el) => !el.done);
    if (filterStr === 'Completed') return items.filter((el) => el.done);
    return items;
  };

  const visibleItems = filterSwitch(data, filter);
  const onSwitchFilter = (filterStr) => setFilter(filterStr);

  const setNewTime = (id, second, minute) => {
    const idx = data.findIndex((el) => el.id === id);
    const oldObj = data[idx];
    const newObject = {
      ...oldObj,
      second,
      minute,
    };
    setData((prevArr) => prevArr.with(idx, newObject));
  };

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
