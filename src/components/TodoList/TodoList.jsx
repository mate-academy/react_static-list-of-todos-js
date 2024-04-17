// Add the required props
import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => (
  <section className="TodoList">
    {todos.length
      ? todos.map(todo => <TodoInfo key={todo.id} todo={todo} />)
      : ''}
  </section>
);
