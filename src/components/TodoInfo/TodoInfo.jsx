import { UserInfo } from '../UserInfo';

// Add the required props
export const TodoInfo = ({ todo }) => {
  const isCompleted = Boolean(todo.completed);

  if (isCompleted) {
    return (
      <article className="TodoInfo TodoInfo--completed">
        <h2 className="TodoInfo__title">{todo.title}</h2>

        {todo.user && <UserInfo user={todo.user} />}
      </article>
    );
  }

  return (
    <article className="TodoInfo">
      <h2 className="TodoInfo__title">{todo.title}</h2>

      {todo.user && <UserInfo user={todo.user} />}
    </article>
  );
};
