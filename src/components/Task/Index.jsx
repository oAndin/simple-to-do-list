/* eslint-disable react/prop-types */
const Task = ({ task, onDelete }) => {
  return (
    <>
      <li>
        <p>{task.nome}</p>
        <button
          onClick={onDelete}>Remover Tarefa</button>
      </li>
    </>
  )
}

export default Task;