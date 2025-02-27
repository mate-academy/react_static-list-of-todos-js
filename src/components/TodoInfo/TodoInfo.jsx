import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => (
  <article
    className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
  >
    <h2
      className="TodoInfo__title"
      style={{ color: todo.completed ? 'green' : 'red' }}
    >
      {todo.title}
    </h2>
    <UserInfo user={todo.user} key={todo.id} />
  </article>
);
