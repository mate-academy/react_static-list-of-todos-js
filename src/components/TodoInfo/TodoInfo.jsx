import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const {
    title,
    completed,
    user,
  } = todo;

  const modifier = completed
    ? 'TodoInfo--completed'
    : '';

  return (
    <article className={`TodoInfo ${modifier}`}>
      <h2 className="TodoInfo__title">{title}</h2>
      <UserInfo user={user} />
    </article>
  );
};
