import { UserInfo } from '../UserInfo/UserInfo';

// Add the required props
export const TodoInfo = ({ todo }) => {
  const classes = `TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`;

  return (
    <article className={classes}>
      <h2 className="TodoInfo__title">{todo.title}</h2>

      {todo.user && <UserInfo user={todo.user} />}
    </article>
  );
};
