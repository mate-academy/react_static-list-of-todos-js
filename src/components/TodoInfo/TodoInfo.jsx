// Add the required props
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo: { completed, title, user } }) => {
  const isCompleted = completed
    ? `TodoInfo TodoInfo--completed`
    : `TodoInfo`;

  return (
    <article className={isCompleted}>
      <h2 className="TodoInfo__title">{title}</h2>

      <UserInfo user={user} />
    </article>
  );
};
