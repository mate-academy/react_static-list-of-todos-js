import classNames from 'classnames';
import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({todo}) => {
  return (
    <article className={classNames('TodoInfo', {
      'TodoInfo--completed': todo.completed,
    })}>
      <h2 className="TodoInfo__title">{todo.title}</h2>

      <UserInfo user={todo.user} />
    </article>
  )
};
