// Add the required props
export const TodoInfo = ({ todo }) => (
  <article className={`TodoInfo ${todo.completed === true ? 'TodoInfo-completed' : ''}`} key={todo.id}>
    <h2 className="TodoInfo__title">{todo.title}</h2>

    <a className="UserInfo" href={todo.user.email}>
      {todo.user.name}
    </a>
  </article>
);
