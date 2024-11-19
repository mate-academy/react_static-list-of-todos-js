// eslint-disable-next-line import/no-extraneous-dependencies
import { clsx } from 'clsx';

import { UserInfo } from '../UserInfo';
import './TodoInfo.scss';

export const TodoInfo = ({ todo }) => {
  return (
    <article
      className={clsx('TodoInfo', todo.completed && 'TodoInfo--completed')}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>
      <UserInfo user={todo.user} />
    </article>
  );
};
