import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => {
  const { title, completed, user } = todo;
  const className = completed
    ? 'TodoInfo TodoInfo--completed'
    : 'TodoInfo false';

  return (
    <article className={`${className}`}>
      <h2 className="TodoInfo__title">{title}</h2>
      <UserInfo user={user} />
    </article>
  );
};
