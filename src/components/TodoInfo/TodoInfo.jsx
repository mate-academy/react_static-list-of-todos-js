import className from 'classnames';
import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => {
  const classNames = className('TodoInfo', {
    'TodoInfo--completed': todo.completed,
  });

  return (
    <article className={classNames}>
      <h2 className="TodoInfo__title">{todo.title}</h2>

      {todo.user && <UserInfo user={todo.user} />}
    </article>
  );
};
