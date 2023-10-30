import { UserInfo } from '../UserInfo/UserInfo';

// Add the required props
export const TodoInfo = ({ todo }) => {
  const className = todo.completed
    ? 'TodoInfo TodoInfo--completed'
    : 'TodoInfo';

  return (
    <>
      <article className={className}>
        <h2 className="TodoInfo__title">{todo.title}</h2>

        <UserInfo user={todo.user} />
      </article>
    </>
  );
};
