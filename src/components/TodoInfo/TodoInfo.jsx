import { UserInfo } from '../UserInfo/UserInfo';
import '../../App.scss';

export const TodoInfo = ({ todo }) => {
  const { user, title, completed } = todo;

  return (
    <article className={`TodoInfo ${completed ? 'TodoInfo--completed' : ''}`}>
      <h2 className="TodoInfo__title">{title}</h2>

      {user && <UserInfo user={user} />}
    </article>
  );
};
