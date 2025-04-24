import cn from 'classnames';
import { UserInfo } from '../UserInfo';
import todosFromServer from '../../api/todos.json';
import usersFromServer from '../../api/users.json';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

const currentUser = getUserById(this.userId);

export const todos = todosFromServer.map(todo => ({
  ...todo,
  user: currentUser,
}));

export const TodoInfo = ({ todo }) => (
  <article
    className={cn('TodoInfo', {
      'TodoInfo--completed': todo.completed === true,
    })}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>

    <UserInfo key={currentUser.id} user={currentUser} />
  </article>
);
