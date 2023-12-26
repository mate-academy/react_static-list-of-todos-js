import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const articleClass = todo.completed
    ? 'TodoInfo TodoInfo--completed'
    : 'TodoInfo';

  return (
    <article className={articleClass}>

      <h2 className="TodoInfo__title">
        {todo.title}
      </h2>

      <UserInfo user={todo.user} key={todo.user.id} />

    </article>
  );
};
