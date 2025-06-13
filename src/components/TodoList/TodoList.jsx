import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => (
  <section className="TodoList">
    <h1 className="TodoList__title">Todos</h1>
    {todos.length > 0 &&
      todos.map(todo => <TodoInfo key={todo.id} todo={todo} />)}
  </section>
);
