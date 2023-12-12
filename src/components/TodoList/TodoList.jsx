import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => (
  <section className="TodoList">
    {todos.map(todo => (
      <li
        key={todo.id}
        style={{ listStyle: 'none' }}
      >
        <TodoInfo todo={todo} />
      </li>
    ))}
  </section>
);
