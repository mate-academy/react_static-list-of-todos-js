import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => {
  return (
    <div
      className={todo.completed ? 'TodoInfo TodoInfo--completed' : 'TodoInfo'}
      data-cy="Todo"
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>

      <p className="TodoInfo__status">
        {todo.completed ? 'Completed' : 'Active'}
      </p>

      {todo.user && <UserInfo user={todo.user} />}
    </div>
  );
};
