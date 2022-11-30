export const TodoItem = ({ id, description, done, handleRemoveTodo, handleToggleTodo }) => (
  <li className="list-group-item d-flex justify-content-between">
    <span
      className={`align-self-center ${done ? 'text-decoration-line-through' : ''}`}
      style={{ cursor: 'pointer' }}
      onClick={() => handleToggleTodo(id)}
    >
      {description}
    </span>
    <button
      className="btn btn-danger"
      onClick={() => handleRemoveTodo(id)}
    >
      Borrar
    </button>
  </li>
);