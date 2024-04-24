import { UserInfo } from '../UserInfo/UserInfo';

// Add the required props
export const TodoInfo = ({ todo }) => (
  <article
    className={
      todo.completed === true ? 'TodoInfo TodoInfo--completed' : 'TodoInfo'
    }
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>
    {todo.user !== null ? <UserInfo user={todo.user} key={todo.userId} /> : ''}
  </article>
);
