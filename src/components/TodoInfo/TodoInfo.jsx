import { UserInfo } from '../UserInfo/UserInfo';
import './TodoInfo.scss';
// Add the required props
export const TodoInfo = ({ todo }) => {
  if (!todo) {
    return null;
  }

  const { title, completed, user } = todo;

  return (
    <article className={`TodoInfo ${completed ? 'TodoInfo--completed' : ''}`}>
      <h2 className="TodoInfo__title">{title}</h2>

      {user && <UserInfo user={user} />}
    </article>
  );
};
