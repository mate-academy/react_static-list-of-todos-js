// Add the required props
// eslint-disable-next-line import/extensions
import { UserInfo } from '../UserInfo/UserInfo.jsx';

export const TodoInfo = ({ todo }) => {
  return (
    <div className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}>
      <p className="TodoInfo__title">{todo.title}</p>
      {todo.user && <UserInfo user={todo.user} />}
    </div>
  );
};
