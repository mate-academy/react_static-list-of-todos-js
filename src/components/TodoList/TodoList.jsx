import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => (
  <ul className="TodoList">
    {todos.map(listItem => (
      <TodoInfo todo={listItem} key={todos.key} />
    ))}
  </ul>
);
