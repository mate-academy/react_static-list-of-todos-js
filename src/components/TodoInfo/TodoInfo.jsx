import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const { userId, completed, title, user } = todo;

  return (
    <article className={`TodoInfo ${completed && 'TodoInfo--completed'}`}>
      <h2 className="TodoInfo__title">{title}</h2>

      {userId && <UserInfo user={user} />}
    </article>
  );
};
