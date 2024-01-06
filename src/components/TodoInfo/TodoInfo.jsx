import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const { title, completed, user } = todo;

  return (
    <article className={`TodoInfo TodoInfo${completed ? '--completed' : ''}`}>
      <h2 className="TodoInfo__title">{title}</h2>
      {UserInfo && <UserInfo user={user} />}
    </article>
  );
};
