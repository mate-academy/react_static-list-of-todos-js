import { TodoInfo } from '../TodoInfo/TodoInfo';

// Add the required props
export const TodoList = ({ todos }) => (
  <div className="TodoList">
    <h2 className="TodoList__title">Todos</h2>
    <ul className="TodoList__list">
      {todos.map(todo => (
        <li key={todo.id} className="TodoList__item">
          <TodoInfo todo={todo} />
        </li>
      ))}
    </ul>
  </div>
);
