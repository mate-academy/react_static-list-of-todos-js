import { UserInfo } from '../UserInfo';
import usersFromServer from '../../api/users.json';

export const TodoInfo = ({ todo }) => (
  <article className={`TodoInfo ${todo.completed && 'TodoInfo--completed'}`}>
    <h2 className="TodoInfo__title">{todo.title}</h2>

    <UserInfo user={usersFromServer[todo.userId - 1]} />
  </article>
);
