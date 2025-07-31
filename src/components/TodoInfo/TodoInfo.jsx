export const TodoInfo = ({ todo }) => {
  return (
    <article
      className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>
      <a className="UserInfo" href={`mailto:${todo.user.email}`}>
        {todo.user.name}
      </a>
    </article>
  );
};
