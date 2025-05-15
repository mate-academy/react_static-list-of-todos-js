// Add the required props

import { TodoInfo } from '../TodoInfo/TodoInfo';

export const TodoList = ({ todos }) => (
  <ul className="TodoList">
    {todos.map(todo => (
      <li key={todo.id}>
        <TodoInfo todo={todo} />
      </li>
    ))}
  </ul>
);
