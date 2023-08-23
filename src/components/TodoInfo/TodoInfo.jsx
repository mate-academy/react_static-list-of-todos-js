import classNames from 'classnames';
import { UserInfo } from '../UserInfo';
import './TodoInfo.scss';

export const TodoInfo = ({ todo }) => {
  const {
    completed,
    title,
  } = todo;

  return (
    <article
      className={`TodoInfo ${classNames({ 'TodoInfo--completed': completed })}`}
    >
      <h2 className="TodoInfo__title">
        {title}
      </h2>

      {todo.user && (
      <UserInfo user={todo.user} />
      )}
    </article>
  );
};
