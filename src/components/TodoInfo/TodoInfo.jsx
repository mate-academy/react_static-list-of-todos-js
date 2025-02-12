import cn from 'classnames';
import { UserInfo } from '../UserInfo';
import './ToDoInfo.scss';

export const TodoInfo = ({ todo }) => {
  return (
    <article
      className={cn('TodoInfo', {
        'TodoInfo--completed': todo.completed === true,
      })}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>
      {todo.user && <UserInfo user={todo.user} />}
    </article>
  );
};
