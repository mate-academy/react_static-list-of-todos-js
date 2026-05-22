import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const classes =
    `TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`.trim();

  return (
    <article className={classes}>
      <h2 className="TodoInfo__title">{todo.title}</h2>
      <UserInfo user={todo.user} />
    </article>
  );
};
