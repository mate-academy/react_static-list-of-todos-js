import { UserInfo } from '../UserInfo/UserInfo';
import users from '../../api/users.json';

export const TodoInfo = ({ todo }) => (
  <article className="TodoInfo">
    <h2 className="TodoInfo__title">{todo.title}</h2>
    <UserInfo user={users[todo.userId]} />
  </article>
);
