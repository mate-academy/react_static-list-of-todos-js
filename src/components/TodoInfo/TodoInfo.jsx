// Add the required props
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const {
    title,
    completed,
    user,
  } = todo;

  const isCompleted = completed ? 'TodoInfo TodoInfo--completed' : 'TodoInfo';

  return (
    <article className={isCompleted}>
      <h2 className="TodoInfo__title">{title}</h2>
      {user && <UserInfo user={user} />}
    </article>
  );
};
