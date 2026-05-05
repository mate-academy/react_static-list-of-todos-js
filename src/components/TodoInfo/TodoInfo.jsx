import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const { title, user, completed } = todo;
  const statusClass = completed ? 'TodoInfo--completed' : '';

  return (
    <article className={`TodoInfo ${statusClass}`}>
      <h2 className="TodoInfo__title">{title}</h2>
      {user && <UserInfo user={user} />}
    </article>
  );
};
