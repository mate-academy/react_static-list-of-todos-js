import { TodoInfo } from '../TodoInfo/TodoInfo';

// Add the required props
export const TodoList = ({ todos }) => (
  <>
    {todos.map(todo => (
      <TodoInfo key={todo.id} todo={todo} />
    ))}
  </>
);
