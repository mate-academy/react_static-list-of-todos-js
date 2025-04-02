// Add the required props
export const TodoList = ({ todos }) => (
  <>
    {todos.map(todo => (
      <article
        key={todo.id}
        className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
      >
        <h2 className="TodoInfo__title">{todo.title}</h2>
        <a className="UserInfo" href={`mailto:${todo.user.email}`}>
          {todo.user.name}
        </a>
      </article>
    ))}
  </>
);
