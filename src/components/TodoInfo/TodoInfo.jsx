import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const { user, title, completed } = todo;

  return (
    <article className={`TodoInfo ${completed ? 'TodoInfo--completed' : null}`}>
      <h2 className="TodoInfo__title">{title}</h2>
      <UserInfo user={user} />
    </article>
  );
};
