import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => (
  <>
    {todos.map(todo => (
      <TodoInfo todo={todo} />
    ))}
  </>
);
