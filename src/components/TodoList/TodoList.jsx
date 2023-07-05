import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => (
  <ul className="TodoList">
    {todos.map(todoItem => (
      <li key={todoItem.id}>
        <TodoInfo todo={todoItem} />
      </li>
    ))}
  </ul>
);
