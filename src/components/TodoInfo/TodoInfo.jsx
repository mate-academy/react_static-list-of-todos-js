import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo: { user, title, completed } }) => (
  <li className={`TodoInfo ${completed ? 'TodoInfo--completed' : ''}`}>
    <h3 className="TodoInfo__title">{title}</h3>
    {user && <UserInfo user={user} />}
  </li>
);
