import { useEffect, useState } from "react";
import Taskinput from "./components/TaskInput/Index";
import TaskList from "./components/TaskList/Index";

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks]);

  const addTask = (task) => {

    // id / nome / status
    setTasks([...tasks, { id: Date.now(), nome: task, status: false }])

    // localstorage
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  const toggleTaskDone = (taskId) => {
    setTasks(tasks.map((task) => task.id === taskId ? { ...task, status: !task.status } : task))
  }

  return (
    <>


      <h1>Lista de tarefa</h1>
      <Taskinput onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onDeleteTask={deleteTask}
        onToggleTaskDone={toggleTaskDone} />
    </>
  )
}

export default App;
