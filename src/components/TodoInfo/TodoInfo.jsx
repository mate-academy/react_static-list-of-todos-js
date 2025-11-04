import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => {
  if (!todo) return null;

  const className = todo.completed
    ? 'TodoInfo TodoInfo--completed'
    : 'TodoInfo';

  return (
    <div className={className} data-cy="TodoInfo">
      <div className="TodoInfo__title" data-cy="TodoTitle">
        {todo.title}
      </div>
      <div className="TodoInfo__meta">
        {todo.user && <UserInfo user={todo.user} />}
        <div className="TodoInfo__status" data-cy="TodoStatus">
          {todo.completed ? 'Completed' : 'Pending'}
        </div>
      </div>
    </div>
  );
};
