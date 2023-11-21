// Add the required props
import cn from 'classnames';
import { UserInfo } from '../UserInfo';

export const TodoInfo = (props) => {
  const {
    title,
    user,
    completed,
  } = props.todo;

  return (
    <article
      className={cn('TodoInfo', {
        'TodoInfo--completed': completed,
      })}
    >
      <h2 className="TodoInfo__title">{title}</h2>
      <UserInfo user={user} />
    </article>
  );
};
