// Add the required types and props
import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => (
  <>
    {todos.map(todo => (
      <TodoInfo todo={todo} key={todo.id} />
    ))}
  </>
);
