import './TodoInfo.scss';
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo: { completed, title, user } }) => (
  <article className={`TodoInfo ${completed && 'TodoInfo--completed'}`}>
    <h2 className="TodoInfo__title">
      {title}
    </h2>

    <UserInfo user={user} />
  </article>
);
