import classNames from 'classnames';
import { UserInfo } from '../UserInfo';

// Add the required props
export const TodoInfo = ({
  todo = { id: 0, title: 'Untitled', completed: false },
  user,
}) => (
  <article
    className={classNames('TodoInfo', {
      'TodoInfo--completed': todo.completed,
    })}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>

    <UserInfo user={user} key={user.id} />
  </article>
);
