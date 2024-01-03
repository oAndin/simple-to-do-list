/* eslint-disable react/prop-types */
const Task = ({ task, onDelete, onToggleDone }) => {
  return (
    <>
      <li>
        <p
          style={{ textDecoration: task.status ? "line-through" : "none" }}
          onClick={onToggleDone}>
          {task.nome}
        </p>
        <button
          onClick={onDelete}>Remover Tarefa</button>
      </li>
    </>
  )
}

export default Task;