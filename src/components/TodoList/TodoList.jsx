import { TodoInfo } from '../TodoInfo/TodoInfo';

export const TodoList = ({ todos }) => {
  const { id } = todos;

  return (
    <section className="TodoList">
      {todos.map(todo => (
        <TodoInfo key={id} todo={todo} />
      ))}
    </section>
  );
};
