import { UserInfo } from '../UserInfo';
import './TodoInfo.scss';

export const TodoInfo = ({ todo }) => {
  const {
    completed,
    title,
  } = todo;

  return (
    <article className={
      completed
        ? 'TodoInfo TodoInfo--completed'
        : 'TodoInfo'
    }
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
