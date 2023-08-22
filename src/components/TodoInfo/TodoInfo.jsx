import cn from 'classnames';
import { UserInfo } from '../UserInfo';

import './TodoInfo.scss';

export const TodoInfo = ({ todo }) => {
  const { completed, title, user } = todo;

  return (
    <article className={cn('TodoInfo', { 'TodoInfo--competed': completed })}>

      <h2 className="TodoInfo__title">{title}</h2>

      {todo.user && <UserInfo user={user} />}

    </article>
  );
};
