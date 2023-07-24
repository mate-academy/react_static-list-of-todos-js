import { UserInfo } from '../UserInfo';
import './TodoInfo.scss';

export const TodoInfo = ({ todo: { title, completed, user } }) => (
  <article className={`TodoInfo${completed ? ' TodoInfo--completed' : ''}`}>
    <h2 className="TodoInfo__title">{title}</h2>

    {user && <UserInfo user={user} />}
  </article>
);
