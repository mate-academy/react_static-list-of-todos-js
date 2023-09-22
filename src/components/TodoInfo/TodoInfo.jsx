import { UserInfo } from '../UserInfo';
import './TodoInfo.scss';

export const TodoInfo = ({ title, complete, user, todo }) => (
  <article className={`TodoInfo ${complete ? 'TodoInfo--completed' : ''}`}>
    <h2 className="TodoInfo__title">
      {title}
    </h2>
    {user && <UserInfo user={user} />}
  </article>
);
