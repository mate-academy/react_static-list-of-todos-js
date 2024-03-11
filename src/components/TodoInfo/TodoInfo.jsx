import cs from 'classnames';
import { UserInfo } from '../UserInfo';

import './TodoInfo.scss';

export const TodoInfo = ({ todo }) => (
  <article
    className={cs('TodoInfo', {
      'TodoInfo--completed': todo.completed,
    })}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>

    <UserInfo user={todo.user} />
  </article>
);
