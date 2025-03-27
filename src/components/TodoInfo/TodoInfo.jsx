import './TodoInfo.scss';
import usersFromServer from '../../api/users.json';
import { UserInfo } from '../UserInfo/UserInfo';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

export const TodoInfo = ({ todo }) => (
  <article className={`TodoInfo ${todo.completed && 'TodoInfo--completed'}`}>
    <h2 className="TodoInfo__title">{todo.title}</h2>

    {todo.userId && <UserInfo user={getUserById(todo.userId)} />}
  </article>
);
