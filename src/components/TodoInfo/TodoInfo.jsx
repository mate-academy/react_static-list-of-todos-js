// Add the required props
import { UserInfo } from '../UserInfo';
import usersFromServer from '../../api/users.json';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId)
      || null;
}

export const TodoInfo = ({ todo }) => (
  <article className={`TodoInfo ${todo.completed === true ? 'TodoInfo--completed' : ''}`}>
    <h2 className="TodoInfo__title">
      {todo.title}
    </h2>
    <UserInfo user={getUserById(todo.userId)} />
  </article>
)