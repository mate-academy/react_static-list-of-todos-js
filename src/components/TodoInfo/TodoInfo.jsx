import { UserInfo } from '../UserInfo';
import usersFromServer from '../../api/users.json';
import './TodoInfo.scss';

export const TodoInfo = ({ todo }) => (
  <article className={todo.completed
    ? 'TodoInfo TodoInfo--completed'
    : 'TodoInfo'}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>

    <UserInfo user={usersFromServer.find(user => (user.id === todo.userId))} />

  </article>
);
