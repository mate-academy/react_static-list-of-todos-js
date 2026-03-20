import { TodoInfo } from '../TodoInfo';

// Add the required props
export const TodoList = ({ todos }) => {
  return (
    <section className="todoapp__main">
      {todos.map(todo => (
        <TodoInfo key={todo.id} todo={todo} />
      ))}
    </section>
  );
};
