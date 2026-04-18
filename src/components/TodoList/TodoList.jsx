import { TodoInfo } from '../TodoInfo/TodoInfo';

export const TodoList = ({ todos }) => {
  if (!todos.length) {
    return null;
  }

  return (
    <section className="TodoList">
      {todos.map(todo => (
        <TodoInfo key={todo.id} todo={todo} />
      ))}
    </section>
  );
};
