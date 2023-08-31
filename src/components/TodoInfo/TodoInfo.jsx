import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const todoInfo = 'TodoInfo';
  const completed = todo.completed ? 'TodoInfo--completed' : '';

  return (
    <article className={`${todoInfo} ${completed}`}>
      <h2 className="TodoInfo__title">{todo.title}</h2>
      <UserInfo user={todo.user} />
    </article>
  );
};
