import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => {
  return (
    <div className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}>
      <div className="TodoInfo__title">{todo.title}</div>
      <p>{todo.completed ? 'Done' : 'In progress'}</p>
      {todo.user && <UserInfo user={todo.user} />}
    </div>
  );
};
