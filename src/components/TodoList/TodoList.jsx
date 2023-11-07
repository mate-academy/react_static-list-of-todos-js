// Add the required props
import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => (
  <>
    {todos.map(todo => (
      <li
        key={todo.id}
      >
        <TodoInfo todo={todo} />
      </li>
    ))}
  </>
);
