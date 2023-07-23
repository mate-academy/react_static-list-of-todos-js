import { TodoInfo } from '../TodoInfo';
import './TodoList.scss';

export const TodoList = ({ todos }) => (
  <ul className="TodoList">
    {todos.map(todo => (
      <TodoInfo todo={todo} key={todo.id} />
    ))}
  </ul>
);
