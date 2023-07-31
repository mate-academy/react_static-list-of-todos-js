import { TodoInfo } from '../TodoInfo';
import './TodoList.scss';

export const TodoList = ({ todos }) => (
  <section className="TodoList">
    <ul className="List">
      {todos.map(todo => (
        <li>
          <TodoInfo key={todo.id} todo={todo} />
        </li>
      ))}
    </ul>

  </section>
);
