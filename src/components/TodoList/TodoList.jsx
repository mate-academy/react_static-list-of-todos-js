/* eslint-disable import/extensions */
// Add the required props
// eslint-disable-next-line import/no-unresolved
import { TodoInfo } from '../TodoInfo/TodoInfo.jsx';

export const TodoList = ({ todos }) => (
  <div className="TodoList">
    {todos.map(todo => (
      <TodoInfo todo={todo} key={todo.id} />
    ))}
  </div>
);
