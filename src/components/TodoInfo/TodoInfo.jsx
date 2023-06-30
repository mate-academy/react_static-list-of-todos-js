/* eslint-disable max-len */
import cn from 'classnames';
import { UserInfo } from '../UserInfo';

// Add the required props
export const TodoInfo = ({ todo }) => {
  const { completed, title } = todo;

  return (
    <>
      <article className={cn('TodoInfo', { 'TodoInfo--completed': completed })}>
        <h2 className="TodoInfo__title">{title}</h2>

        <UserInfo user={todo.user} />
      </article>
    </>
  );
};
