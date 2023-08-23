import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => {
  const { id } = todos;

  return (
    <section className="TodoList">
      {todos.map(todo => (
        <TodoInfo todo={todo} key={id} />
      ))}
    </section>
  );
};
