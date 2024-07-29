import "./App.css";
import { Main } from "../Main/Main.jsx";
import { TaskList } from "../TaskList/TaskList.jsx";
import { NewTaskForm } from "../NewTaskForm/NewTaskForm.jsx";
import { Footer } from "../Footer/Footer.jsx";
import { formatDistanceToNow } from "date-fns/formatDistanceToNow";
import { useState } from "react";
import { Header } from "../Header/Header.jsx";

const App = () => {
  const result = formatDistanceToNow(new Date(), {
    includeSeconds: true,
    addSuffix: true,
  });

  const [data, setData] = useState([
    {
      id: 1,
      description: "Active task",
      created: result,
      done: false,
      edit: false,
    },
    {
      id: 2,
      description: "Completed task",
      created: result,
      done: false,
      edit: false,
    },
    {
      id: 3,
      description: "Editing task",
      created: result,
      done: false,
      edit: false,
    },
  ]);

  const [filter, setFilter] = useState("All");

  const unfinishedTasksCounter = data.filter(
    (el) => el.done === false,
  ).length;

  function onRemove(id) {
    const newArr = data.filter((el) => el.id !== id);
    setData(newArr);
  }

  function onAdd(value) {
    let id = data.length + 1;
    const newItem = {
      id,
      description: value,
      created: result,
      done: false,
      edit: false,
    };
    setData(() => [...data, newItem]);
  }

  function toggleProperty(arr, id, propName, ...otherProp) {
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
  }

  function onToggleDone(id) {
    toggleProperty(data, id, "done");
  }

  function onToggleEdit(id) {
    toggleProperty(data, id, "edit");
  }

  function onEditTask(id, value) {
    toggleProperty(data, id, "edit", "description", value);
  }

  function clearCompleted() {
    const newArr = data.filter((el) => !el.done);
    setData(newArr);
  }

  function filterSwitch(items, filter) {
    if (filter === "All") return items;
    if (filter === "Active")
      return items.filter((el) => !el.done);
    if (filter === "Completed")
      return items.filter((el) => el.done);
  }

  const visibleItems = filterSwitch(data, filter);

  function onSwitchFilter(filter) {
    setFilter(filter);
  }

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
        data={data}
        countTask={unfinishedTasksCounter}
        clearCompleted={clearCompleted}
        filter={filter}
        onSwitchFilter={onSwitchFilter}
      />
    </section>
  );
};

export default App;

