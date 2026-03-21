// Add the required props
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const { title, completed, user } = todo;

  return (
    <article
      className={`TodoInfo ${completed ? 'TodoInfo--completed' : ''}`}
      data-cy="Todo"
    >
      <h2 className="TodoInfo__title" data-cy="TodoTitle">
        {title}
      </h2>

      {user && <UserInfo user={user} />}
      <p className="TodoInfo__status" data-cy="TodoStatus">
        {completed ? 'Completed' : 'In progress'}
      </p>
    </article>
  );
};
