import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => (
  <section className="TodoList">
    {todos.length !== 0
      ? todos.map(todo => <TodoInfo key={todo.id} todo={todo} />)
      : ''}
  </section>
);
