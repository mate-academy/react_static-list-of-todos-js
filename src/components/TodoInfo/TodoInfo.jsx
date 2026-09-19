// Add the required props`
import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => {
  const { completed, title, user } = todo;

  const completedClassName = completed ? 'TodoInfo--completed' : '';

  return (
    <article className={`TodoInfo ${completedClassName}`}>
      <h2 className="TodoInfo__title">{title}</h2>

      {user && <UserInfo user={user} />}
    </article>
  );
};
