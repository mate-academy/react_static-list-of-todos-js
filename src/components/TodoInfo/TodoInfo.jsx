import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const todoInfoClass = `TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`;

  return (
    <article className={todoInfoClass}>
      <h2 className="TodoInfo__title">{todo.title}</h2>

      {todo.user && <UserInfo user={todo.user} />}
    </article>
  );
};
