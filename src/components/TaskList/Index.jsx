/* eslint-disable react/prop-types */
import Task from "../Task/Index";


const TaskList = ({ tasks, onDeleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          task={task}
          onDelete={() => onDeleteTask(task.id)}
        />
      ))}
    </ul>
  )
}

export default TaskList;