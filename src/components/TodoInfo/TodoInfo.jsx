import { UserInfo } from '../UserInfo/UserInfo';
import cn from 'classnames';


export const TodoInfo = ({ todo }) => {
  return (
    <article
    className={cn('TodoInfo', { 'TodoInfo--completed': todo.completed })}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>
      {todo.user && <UserInfo user={todo.user} />}
    </article>
  );
};
