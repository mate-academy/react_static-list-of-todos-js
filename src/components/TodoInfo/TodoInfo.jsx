import './TodoInfo.scss';

import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => {
  const todoStatus = todo.completed
    ? 'TodoInfo TodoInfo--completed'
    : 'TodoInfo';

  return (
    <article className={todoStatus}>
      <h2 className="TodoInfo__title">{todo.title}</h2>

      {todo.user && <UserInfo key={todo.user.id} user={todo.user} />}
    </article>
  );
};
