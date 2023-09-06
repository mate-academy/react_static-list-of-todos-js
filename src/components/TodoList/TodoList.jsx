import { TodoInfo } from '../TodoInfo/TodoInfo';
import './TodoList.scss';

export const TodoList = ({ todos }) => (
  <ul className="TodoList">
    {todos.map(todo => (
      <li key={todo.id}>
        <TodoInfo todo={todo} />
      </li>
    ))}
  </ul>
);
