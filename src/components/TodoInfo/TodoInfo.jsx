import classNames from 'classnames';

import { UserInfo } from '../UserInfo';

export function TodoInfo({ todo }) {
  return (
    <article
      className={classNames('TodoInfo', {
        'TodoInfo--completed': todo.completed === true,
      })}
      key={todo.id}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>
      <UserInfo user={todo.user} />
    </article>
  );
}
