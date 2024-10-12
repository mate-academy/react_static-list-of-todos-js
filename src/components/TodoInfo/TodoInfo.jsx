import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const { user, userId, completed, title } = todo;

  return (
    <article className={`TodoInfo ${completed && 'TodoInfo--completed'}`}>
      <h2 className="TodoInfo__title">{title}</h2>

      {userId && <UserInfo user={user} />}
    </article>
  );
};
