// Add the required props
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const {
    completed,
    title,
    user,
  } = todo;

  return (
    <article
      className={
        completed
          ? 'TodoInfo TodoInfo--completed'
          : 'TodoInfo'
      }
    >
      <h2
        className="TodoInfo__title"
      >
        {title}
      </h2>
      {user
        && <UserInfo user={user} />
      }
    </article>
  );
};
