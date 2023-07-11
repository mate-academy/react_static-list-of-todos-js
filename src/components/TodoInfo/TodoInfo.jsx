// Add the required props
// import usersFromServer from '../../api/users.json';
import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => (
  <article className="TodoInfo TodoInfo--completed">
    <h2 className="TodoInfo__title">
      {todo.title}
    </h2>
    <UserInfo
      name={todo.user.name}
      email={todo.user.email}
    />
  </article>
);
