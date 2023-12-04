import './TodoInfo.scss';

import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const testCompleted = todo.completed
    ? 'TodoInfo TodoInfo--completed'
    : 'TodoInfo';

  return (
    <article className={testCompleted}>
      <h2 className="TodoInfo__title">{todo.title}</h2>

      <UserInfo user={todo.user} />
    </article>
  );
};
