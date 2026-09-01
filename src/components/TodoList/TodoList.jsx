import { TodoInfo } from "../TodoInfo";

// Add the required props
export const TodoList = ({ todos }) => (
  <ul className="TodoList">
    {todos.map(todo => (
      <TodoInfo todo={todo} key={todo.id} />
    ))}
  </ul>
);
