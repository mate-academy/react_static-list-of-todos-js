import { UserInfo } from '../UserInfo/UserInfo';

// Add the required props
export const TodoInfo = ({ todo }) => (
  <article
    className={`TodoInfo ${todo.completed === true ? 'TodoInfo--completed' : ''}`}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>
    <span className="TodoInfo__status">{todo.completed ? 'Completed' : 'Not completed'}</span>
    { ' ' }
    {todo.user && <UserInfo user={todo.user} />}
  </article>
);
