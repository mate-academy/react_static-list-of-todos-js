import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => {
  const isCompleted = todo.completed;

  return (
    <article
      className={isCompleted ? 'TodoInfo TodoInfo--completed' : 'TodoInfo'}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>
      <UserInfo key={todo.user.id} user={todo.user} />
    </article>
  );
};
