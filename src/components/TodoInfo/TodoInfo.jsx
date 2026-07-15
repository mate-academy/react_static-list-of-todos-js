import { UserInfo } from '../UserInfo';
import classNames from 'classnames';

export const TodoInfo = ({ todo }) => {
  return (
    <article className={classNames('TodoInfo', {'TodoInfo--completed': todo.completed})}>
      <h2 className="TodoInfo__title">{todo.title}</h2>
      {todo.user && <UserInfo user={todo.user} />}
    </article>
  );
};
