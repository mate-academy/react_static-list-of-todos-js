// eslint-disable-next-line prettier/prettier
import { TodoInfo } from "../TodoInfo";

export const TodoList = ({ todos }) => {
  return (
    <section className="TodoList">
      {todos.map(todo => (
        <TodoInfo key={todo.id} todo={todo} />
      ))}
    </section>
  );
};
