// Add the required props
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  return (
    <div className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}>
      <h3 className="TodoInfo__title">{todo.title}</h3>
      <p>{todo.description}</p>
      {todo.user && <UserInfo user={todo.user} />}
    </div>
  );
};
