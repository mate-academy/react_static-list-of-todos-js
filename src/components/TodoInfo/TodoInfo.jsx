import cn from 'classnames';

import { UserInfo } from '../UserInfo';

import './TodoInfo.scss';

export const TodoInfo = ({ todo }) => {
  const isCompleted = cn({ 'TodoInfo--completed': todo.completed });

  return (
    <article className={`TodoInfo ${isCompleted}`}>
      <h2 className="TodoInfo__title">{todo.title}</h2>
      {todo.user && <UserInfo user={todo.user} />}
    </article>
  );
};
