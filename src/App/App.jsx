import './App.css';
import Main from '../Main/Main';
import TaskList from '../TaskList/TaskList';
import NewTaskForm from '../NewTaskForm/NewTaskForm';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { useState } from 'react';

let index = 1;

function App() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('All');

  const unfinishedTasksCounter = data.filter((el) => el.done === false).length;

  const onRemove = (id) => {
    const newArr = data.filter((el) => el.id !== id);
    setData(newArr);
  };

  const onAdd = (value) => {
    const newItem = {
      id: (index += 1),
      description: value,
      created: new Date(),
      done: false,
      edit: false,
    };
    setData(() => [...data, newItem]);
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
    const newArr = arr.with(idx, newObj);
    setData(newArr);
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
    const newArr = data.filter((el) => !el.done);
    setData(newArr);
  };

  const filterSwitch = (items, filterStr) => {
    if (filterStr === 'All') return items;
    if (filterStr === 'Active') return items.filter((el) => !el.done);
    if (filterStr === 'Completed') return items.filter((el) => el.done);
    return items;
  };

  const visibleItems = filterSwitch(data, filter);
  const onSwitchFilter = (filterStr) => {
    setFilter(filterStr);
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
