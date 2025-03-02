import { UserInfo } from '../UserInfo/UserInfo';
import './TodoInfo.scss';

export const TodoInfo = ({ todo: { userId, title, user, completed } }) => (
  <article className={`TodoInfo ${completed && 'TodoInfo--completed'}`}>
    <h2 className="TodoInfo__title">{title}</h2>
    {user && <UserInfo user={user} key={userId} />}
  </article>
);
