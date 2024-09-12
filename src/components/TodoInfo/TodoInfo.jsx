import { UserInfo } from '../UserInfo';

// Add the required props
export const TodoInfo = ({ todo }) => {
  const classNames = `TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`;

  return (
    <article className={classNames}>
      <h2 className="TodoInfo__title">{todo.title}</h2>

      <UserInfo user={todo.user} key={todo.user.id} />
    </article>
  );
};
