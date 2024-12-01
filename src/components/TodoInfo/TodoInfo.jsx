import { UserInfo } from "../UserInfo/UserInfo";

export const TodoInfo = ({ todo }) => {
  const isCompletedClass = todo.completed ? "TodoInfo--completed" : "";

  return (
    <article className={`TodoInfo ${isCompletedClass}`}>
      <h2 className="TodoInfo__title">
        {todo.title || "Untitled Todo"}
      </h2>

      {/* Безпечне рендерення UserInfo */}
      {todo.user ? (
        <UserInfo user={todo.user} key={todo.user.id || "default"} />
      ) : (
        <p className="TodoInfo__no-user">No user assigned</p>
      )}
    </article>
  );
};
