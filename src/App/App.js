import "./App.css";
import { Main } from "../Main/Main.jsx";
import { TaskList } from "../TaskList/TaskList.jsx";
import { NewTaskForm } from "../NewTaskForm/NewTaskForm.jsx";
import { Footer } from "../Footer/Footer.jsx";
import { formatDistanceToNow } from "date-fns/formatDistanceToNow";
import { useState } from "react";

const result = formatDistanceToNow(new Date(), {
  includeSeconds: true,
  addSuffix: true,
});

const App = () => {
  const [data, setData] = useState([
    {
      id: 1,
      description: "Active task",
      created: result,
    },
    {
      id: 2,
      description: "Completed task",
      created: result,
    },
    {
      id: 3,
      description: "Editing task",
      created: result,
    },
  ]);

  function onRemove(id) {
    const newArr = data.filter((el) => el.id !== id);
    setData(newArr);
  }

  return (
    <section className="todoapp">
      <NewTaskForm />
      <Main>
        <TaskList data={data} onRemove={onRemove} />
      </Main>
      <Footer />
    </section>
  );
};

export default App;

