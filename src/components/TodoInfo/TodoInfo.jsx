// Add the required props
import classNames from 'classnames';
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => (
  // eslint-disable-next-line max-len
  <article className={classNames('TodoInfo', { 'TodoInfo--completed': todo.completed })}>
    <h2 className="TodoInfo__title">{todo.title}</h2>

    <UserInfo user={todo.user} />
  </article>
);
