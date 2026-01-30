import { TodoInfo } from '../TodoInfo';

// Add the required props
export const TodoList = ({ todos }) => (
  <section className="TodoList">
    {todos.map(todo => {
      const { id, user, ...rest } = todo;

      return <TodoInfo key={id} todo={rest} />;
    })}
  </section>
);
