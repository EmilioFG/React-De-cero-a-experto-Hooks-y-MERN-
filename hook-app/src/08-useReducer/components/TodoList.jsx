import { TodoItem } from "./TodoItem";


export const TodoList = ({ todos, handleRemoveTodo, handleToggleTodo }) => (
  <ul className="list-group">
    {todos?.map((todo) => (
      <TodoItem
        key={todo?.id}
        handleRemoveTodo={handleRemoveTodo}
        handleToggleTodo={handleToggleTodo}
        {...todo}
      />
    ))}
  </ul>
);