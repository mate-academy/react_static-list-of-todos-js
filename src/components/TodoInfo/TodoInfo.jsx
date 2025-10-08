import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  if (todo.completed) {
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
