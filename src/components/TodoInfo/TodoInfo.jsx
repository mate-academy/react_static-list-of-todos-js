import { UserInfo } from '../UserInfo';
import './TodoInfo.scss';

export const TodoInfo = ({ title, completed, user }) => (
  <article className={`TodoInfo ${completed ? 'TodoInfo--completed' : ''}`}>
    <h2 className="TodoInfo__title">{title}</h2>

    <UserInfo user={user} />
  </article>
);
