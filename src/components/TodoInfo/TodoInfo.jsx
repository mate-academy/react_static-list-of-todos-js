import classnames from 'classnames';
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => (
  <>
    <article className={classnames('TodoInfo', {
      'TodoInfo--completed': todo.completed === true,
    })}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>
      {todo.user && (
        <UserInfo user={todo.user} />
      )}
    </article>
  </>
);
