import { UserInfo } from '../UserInfo/UserInfo';

// import usersFromServer from '../../api/users.json';
// Add the required props

// function getUserById(userId) {
// return usersFromServer.find(user => user.id === userId) || null;
// }

export const TodoInfo = ({ todo }) => (
  <article
    className={todo.completed ? 'TodoInfo TodoInfo--completed' : 'TodoInfo'}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>

    <UserInfo user={todo.user} />
  </article>
);
