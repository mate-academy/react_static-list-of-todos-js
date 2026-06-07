/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
// Add the required props
// eslint-disable-next-line import/named
import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => (
  <>
    {todos.map(todo => (
      <TodoInfo
        key={todo.id}
        todo={todo}
      />
    ))}
  </>
);
