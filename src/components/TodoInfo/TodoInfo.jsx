import { UserInfo } from '../UserInfo/UserInfo';
import usersFromServer from '../../api/users.json';

export const TodoInfo = ({ todo }) => (
  <article
    className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>
    {usersFromServer
      .filter(user => user.id === todo.userId)
      .map(user => (
        <UserInfo key={user.id} user={user} />
      ))}
  </article>
);
