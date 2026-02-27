import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const { title, completed, user } = todo;

  const classNames = `TodoInfo${completed ? ' TodoInfo--completed' : ''}`;

  return (
    <article className={classNames}>
      <h2 className="TodoInfo__title">{title}</h2>

      {user && <UserInfo user={user} />}
    </article>
  );
};
