import { UserInfo } from '../UserInfo';
import './TodoInfo.scss';

export const TodoInfo = ({ todo }) => {
  const { completed, title, user } = todo;

  const completedClass = completed ? 'TodoInfo--completed' : '';

  return (
    <article className={`TodoInfo ${completedClass}`}>
      <h2 className="TodoInfo__title">{title}</h2>

      {user && (
        <UserInfo user={user} />
      )}
    </article>
  );
};
