import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const { completed, title, user } = todo;

  return (
    (completed
      ? (
        <article className="TodoInfo TodoInfo--completed">
          <h2 className="TodoInfo__title">{title}</h2>

          <UserInfo
            user={user}
          />
        </article>
      )
      : (
        <article className="TodoInfo">
          <h2 className="TodoInfo__title">{title}</h2>

          <UserInfo
            user={user}
          />
        </article>
      )
    )
  );
};
