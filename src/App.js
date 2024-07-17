import "./App.css";
import { Main } from "./Main/Main.jsx";
import { TaskList } from "./TaskList/TaskList.jsx";
import { NewTaskForm } from "./NewTaskForm/NewTaskForm.jsx";
import { Footer } from "./Footer/Footer.jsx";
import { formatDistanceToNow } from 'date-fns/formatDistanceToNow';

const result = formatDistanceToNow(new Date(), {
  includeSeconds: true,
  addSuffix: true
});

function App() {
  return (
    <section className="todoapp">
        <NewTaskForm/>
        <Main>
          <TaskList date={result}/>
        </Main>
        <Footer/>
    </section>
  );
}

export default App;
