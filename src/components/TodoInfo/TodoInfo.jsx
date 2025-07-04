import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => (
  <div className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}>
    <p className="TodoInfo__id">{todo.id}</p>
    <p className="TodoInfo__title">{todo.title}</p>

    {todo.user && <UserInfo user={todo.user} />}
  </div>
);
