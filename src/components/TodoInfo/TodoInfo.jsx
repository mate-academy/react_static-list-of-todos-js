import cn from 'classnames';
import { UserInfo } from '../UserInfo';
import './TodoInfo.scss';

export const TodoInfo = ({ todo }) => {
  const { id, completed, title } = todo;

  return (
    <article className={cn('TodoInfo',
      { 'TodoInfo--completed': completed })}
    >

      <h2 className="TodoInfo__title">
        {title}
      </h2>

      {todo.user && (
      <UserInfo
        user={todo.user}
        key={id}
      />
      )}

    </article>
  );
};
