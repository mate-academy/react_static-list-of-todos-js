import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => (
  <div className="TodoList">
    {todos.map(todo => (
      <section key={todo.id} className="TodoList__item">
        <TodoInfo todo={todo} />
      </section>
    ))}
  </div>
);
