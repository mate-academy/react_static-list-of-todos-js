import { UserInfo } from '../UserInfo';
import './TodoInfo.scss';

export const TodoInfo = ({ todo: { completed, title, user } }) => {
  const completedClass = completed ? ' TodoInfo--completed' : '';

  return (
    <article className={`TodoInfo${completedClass}`}>
      <h2 className="TodoInfo__title">{title}</h2>

      <UserInfo user={user} />
    </article>
  );
};
