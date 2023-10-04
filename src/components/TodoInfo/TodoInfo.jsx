import { UserInfo } from '../UserInfo';

// Add the required props
export const TodoInfo = ({ todo }) => {
  const {
    user,
    completed,
    title,
  } = todo;

  return (
    <article className={`TodoInfo ${completed && 'TodoInfo--completed'}`}>
      <h2 className="TodoInfo__title">
        {title}
      </h2>

      <UserInfo user={user} />
    </article>
  );
};
