import { UserInfo } from '../UserInfo';
import users from '../../api/users.json';

export const TodoInfo = ({ todo }) => (
  <div className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}>
    <h2 className="TodoInfo__title">{todo.title}</h2>
    <UserInfo user={users.find(user => user.id === todo.userId)} />
  </div>
);
