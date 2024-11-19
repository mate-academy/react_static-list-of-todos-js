// Add the required props
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const { title, user, completed } = todo;
  const userComp = user ? <UserInfo user={user} /> : null;
  const todoClassName = completed ? 'TodoInfo TodoInfo--completed' : 'TodoInfo';

  return (
    <article className={todoClassName}>
      <h2 className="TodoInfo__title">{title}</h2>
      {userComp}
    </article>
  );
};
