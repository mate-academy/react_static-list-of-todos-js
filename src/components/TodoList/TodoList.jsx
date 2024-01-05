import './TodoList.scss';
import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => (
  <section className="TodoList">
    <ul className="TodoList__list">
      {todos.map(todo => (
        <li className="TodoList__item" key={todos.id}>
          <TodoInfo todos={todo} />
        </li>
      ))}
    </ul>
  </section>
);
