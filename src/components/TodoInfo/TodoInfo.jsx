import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo, users }) => (
  <article
    className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>

    <UserInfo user={todo.user || users[todo.userId - 1]} />
  </article>
);
