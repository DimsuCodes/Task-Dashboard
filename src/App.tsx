import { Dashboard } from "./components/Dashboard/Dashboard";
import { TaskFilter } from "./components/TaskFilter/TaskFilter";
import { TaskForm } from "./components/TaskForm/TaskForm";
import { TaskItem } from "./components/TaskList/TaskItem";
import { TaskList } from "./components/TaskList/TaskList";


export default function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <Dashboard />
      <TaskForm onSubmit={(data) => console.log(data)} />
      <TaskList />
      <TaskItem />
      <TaskFilter />
      
    </div>
  )
}