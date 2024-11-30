// Add the required props
import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => (
  <div className="TodoList">
    {todos.map(todo => (
      <TodoInfo key={todo.id} todo={todo} />
    ))}
  </div>
);
