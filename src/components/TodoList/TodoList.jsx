import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => {
  return (
    <section className="TodoList">
      {todos.map(todo => (
        <TodoInfo key={todos.id} todo={todo} />
      ))}
    </section>
  );
};
