// Add the required props
import cn from 'classnames';
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const {
    title,
    completed,
    user,
  } = todo;

  // const isCompleted = completed ? 'TodoInfo TodoInfo--completed' : 'TodoInfo';

  return (
    // <article className={isCompleted}>
    <article className={cn('TodoInfo', {
      'TodoInfo--completed': completed,
    })}>

      <h2 className="TodoInfo__title">{title}</h2>
      {user && <UserInfo user={user} />}
    </article>
  );
};
