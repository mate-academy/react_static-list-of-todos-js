import { TodoInfo } from '../TodoInfo';

// Add the required props
export const TodoList = ({ todos }) => {
  return (
    <section className="TodoList">
      {todos.map(todo => {
        return <TodoInfo key={todo.id} todo={todo} />;
      })}
    </section>
  );
};
