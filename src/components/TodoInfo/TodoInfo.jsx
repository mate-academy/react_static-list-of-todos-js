import { UserInfo } from '../UserInfo/UserInfo';

// Add the required props
export const TodoInfo = ({ todo }) => {
  return (
    // <article className="TodoInfo TodoInfo--completed">
    <article
      className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>

      <UserInfo user={todo.user} />
    </article>
  );
};
