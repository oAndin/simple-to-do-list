import { useState, useEffect } from "react";
import Taskinput from "./components/TaskInput/Index";
import TaskList from "./components/TaskList/Index";

const App = () => {

  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {

    // id / nome / status
    setTasks([...tasks, { id: Date.now(), nome: task, status: false }])

    // localstorage

  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));

  }

  return (
    <>


      <h1>Lista de tarefa</h1>
      <Taskinput onAddTask={addTask} />
      <TaskList tasks={tasks} onDeleteTask={deleteTask} />
    </>
  )
}

export default App;
