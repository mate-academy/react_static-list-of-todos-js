import { TodoInfo } from '../TodoInfo/TodoInfo';

// Add the required props
export const TodoList = ({ todos }) => {
  return (
    <section className="TodoList">
      {todos.map(todo => (
        <TodoInfo key={todo.id} todo={todo}>
          <h2 className="TodoInfo__title">{todo.title}</h2>
        </TodoInfo>
      ))}
    </section>
  );
};
