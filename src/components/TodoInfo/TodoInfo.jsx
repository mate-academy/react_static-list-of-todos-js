// Add the required props

export const TodoInfo = ({ todo }) => {
  return (
    <article
      className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>

      <a
        className="UserInfo"
        href={`mailto:${todo.user.email}`}
        data-cy="UserInfo"
      >
        {todo.user.name}
      </a>
    </article>
  );
};
