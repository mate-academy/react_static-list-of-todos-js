import { TodoInfo } from '../TodoInfo/TodoInfo';

// Add the required props
export const TodoList = ({ todos }) => (
  <section className="TodoList">
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <TodoInfo todo={todo} />
        </li>
      ))}
    </ul>
  </section>
);
