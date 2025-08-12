import { UserInfo } from "../UserInfo/UserInfo";

// Add the required props
export const TodoInfo = ({ todo }) => {
  return (
    <article
      className={
        todo.completed
          ? 'TodoInfo TodoInfo--completed'
          : 'TodoInfo TodoInfo--active'
      }
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>
      {todo.user && <UserInfo user={todo.user} />}
    </article>
  );
};
