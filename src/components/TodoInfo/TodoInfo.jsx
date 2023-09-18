import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const { completed, title, user } = todo;

  return (
    <article className={completed
      ? 'TodoInfo TodoInfo--completed'
      : 'TodoInfo'
    }
    >
      <h1 className="TodoInfo__title">{title}</h1>
      {user && <UserInfo user={user} />}
    </article>
  );
};
