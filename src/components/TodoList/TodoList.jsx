// Add the required props
import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => (
  <section>
    {todos.map(todo => {
      return <TodoInfo key={todo.id} todo={todo} />;
    })}
  </section>
);
