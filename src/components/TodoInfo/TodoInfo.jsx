import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => (
  <div className={`TodoInfo${todo.completed ? ' TodoInfo--completed' : ''}`}>
    <h3 className="TodoInfo__title" data-cy="todo-title">
      {todo.title}
    </h3>

    {todo.user && <UserInfo user={todo.user} />}
  </div>
);

// <>TodoInfo markup</>;
