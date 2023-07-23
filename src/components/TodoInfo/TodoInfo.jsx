import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo: { completed, title, user } }) => (
  <li className={`TodoInfo ${completed ? 'TodoInfo--completed' : ''}`}>
    <h2 className="TodoInfo__title">{title}</h2>

    {user && <UserInfo user={user} />}
  </li>
);
