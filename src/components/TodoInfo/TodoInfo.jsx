import './TodoInfo.scss';

import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => {
  const todoClass = todo.completed
    ? 'TodoInfo TodoInfo--completed'
    : 'TodoInfo';
  const { title, user } = todo;

  return (
    <article className={todoClass}>
      <h2 className="TodoInfo__title">{title}</h2>

      <UserInfo user={user} />
    </article>
  );
};

/*
      <article className="TodoInfo TodoInfo--completed">
        <h2 className="TodoInfo__title">HTML</h2>

      </article>

*/
