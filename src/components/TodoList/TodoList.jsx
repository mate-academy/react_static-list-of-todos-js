import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => {
  return (
    <section className="TodoList">
      {todos.map(todo => (
        <TodoInfo todo={todo} user={todo.user} key={todo.id} />
      ))}
    </section>
  );
};
