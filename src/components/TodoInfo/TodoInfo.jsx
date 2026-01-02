import { UserInfo } from '../UserInfo/UserInfo';
import './TodoInfo.scss';

export const TodoInfo = ({ todo: { title, completed, user } }) => {
  return (
    <article
      className={`TodoInfo TodoInfo${(completed && '--completed') || ''}`}
    >
      <h2 className="TodoInfo__title">{title}</h2>

      {user && <UserInfo user={user} />}
    </article>
  );
};
