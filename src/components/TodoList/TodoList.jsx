// Add the required props

import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => (
  <section className="TodoList">
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {todos.map(todo => (
        <li key={todo.id}>
          <TodoInfo todo={todo} />
        </li>
      ))}
    </ul>
  </section>
);
