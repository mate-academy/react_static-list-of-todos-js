import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => (
  <section className="TodoList">
    {todos.length
      ? todos.map(todo => <TodoInfo todo={todo} key={todo.id} />)
      : null}
  </section>
);
