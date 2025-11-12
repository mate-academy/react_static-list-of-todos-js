import { UserInfo } from '../UserInfo';

// Add the required props
export const TodoInfo = ({ todo }) => {
  const todoClasses = ['TodoInfo', todo.completed && 'TodoInfo--completed']
    .filter(Boolean)
    .join(' ');

  return (
    <article className={todoClasses}>
      <h2 className="TodoInfo__title">{todo.title}</h2>

      {todo.user && <UserInfo user={todo.user} />}
    </article>
  );
};
