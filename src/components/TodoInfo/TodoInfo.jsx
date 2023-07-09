import { UserInfo } from '../UserInfo';

// Add the required props
export const TodoInfo = ({ todo }) => {
  const {
    title,
  } = todo;

  return (
    <article className="TodoInfo TodoInfo--completed">
      <h2 className="TodoInfo__title">{title}</h2>
      {todo.user && <UserInfo user={todo.user} />}
    </article>
  );
};
