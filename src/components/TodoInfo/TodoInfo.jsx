import { UserInfo } from '../UserInfo/UserInfo';

// Add the required props
export const TodoInfo = ({ todo }) => (
  <div className={`TodoInfo${todo.completed ? ' TodoInfo--completed' : ''}`}>
    <p className="TodoInfo__title">{todo.title}</p>
    <UserInfo user={todo.user} />
  </div>
);
