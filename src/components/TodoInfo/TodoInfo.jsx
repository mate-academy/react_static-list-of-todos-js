import './TodoInfo.scss';

import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const { title, completed, user } = todo;
  const todoClass = completed ? 'TodoInfo TodoInfo--completed' : 'TodoInfo';

  return (
    <article className={todoClass}>
      <h2 className="TodoInfo__title">{title}</h2>

      {user && <UserInfo user={user} />}
    </article>
  );
};
