import { TodoInfo } from '../TodoInfo/TodoInfo';

// Add the required props
export const TodoList = ({ todos }) => (
  <>
    {todos.map(todo => (
      <TodoInfo todo={todo} key={todo.id} />
    ))}
  </>
);
