import { TodoInfo } from '../TodoInfo';
import './TodoList.css';

// Add the required props
export const TodoList = ({ todos }) => (
  <section className="TodoList">
    <ul className="TodoList__list">
      {todos.map(todo => (
        <li key={todo.id} className="TodoList__item">
          <TodoInfo todo={todo} />
        </li>
      ))}
    </ul>
  </section>
);
