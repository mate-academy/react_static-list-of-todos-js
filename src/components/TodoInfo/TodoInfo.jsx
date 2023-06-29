import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const classCompleted = todo.completed
    ? 'TodoInfo TodoInfo--completed'
    : 'TodoInfo';

  return (
    <>
      <article className={classCompleted}>
        <h2 className="TodoInfo__title">
          {todo.title}
        </h2>

        {todo.user !== null
          && <UserInfo user={todo.user} />}
      </article>
    </>
  );
};
