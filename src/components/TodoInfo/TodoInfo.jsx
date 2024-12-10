import usersFromServer from '../../api/users.json';
import '../../App.scss';
import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => (
  <div className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}>
    <h2 className="TodoInfo__title">{todo.title}</h2>
    {usersFromServer.map(
      user => todo.userId === user.id && <UserInfo user={user} />,
    )}
  </div>
);
