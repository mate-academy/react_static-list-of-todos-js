import { UserInfo } from '../UserInfo';

export const TodoList = ({ todos }) => (
  <section className="TodoList">
    {todos.map(todo => (
      <UserInfo
        key={todo.id}
        todo={todo}
      />
    ))}

  </section>
);
