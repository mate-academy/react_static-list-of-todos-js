import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const { user, title, completed } = todo;

  let nameOfClass = 'TodoInfo';

  if (completed) {
    nameOfClass += ' TodoInfo--completed';
  }

  return (
    <article className={nameOfClass}>
      <h2 className="TodoInfo__title">{title}</h2>

      <UserInfo user={user} />
    </article>
  );
};
