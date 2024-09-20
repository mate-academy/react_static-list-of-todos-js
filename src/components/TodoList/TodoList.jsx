import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos, users }) => {
  return (
    <section className="TodoList">
      {todos.map(todo => (
        <TodoInfo todo={todo} users={users} key={todo.id} />
      ))}
    </section>
  );
};
