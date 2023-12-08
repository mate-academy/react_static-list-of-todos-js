import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const { completed, user } = todo;

  return completed === true
    ? (
      <article className="TodoInfo TodoInfo--completed">
        <h2 className="TodoInfo__title">{todo.title}</h2>
        <UserInfo user={user} />
      </article>
    )
    : (
      <article className="TodoInfo">
        <h2 className="TodoInfo__title">{todo.title}</h2>
        <UserInfo user={user} />
      </article>
    );
};
