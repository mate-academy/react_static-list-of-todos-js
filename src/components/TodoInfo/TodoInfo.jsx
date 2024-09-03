// Add the required props

export const TodoInfo = ({ todo }) => {
  const completedClass = todo.completed ? 'TodoInfo--completed' : '';

  return (
    <div className={`TodoInfo ${completedClass}`}>
      <h3 className="TodoInfo__title">{todo.title}</h3>
      {todo.user && (
        <a className="UserInfo" href={`mailto:${todo.user.email}`}>
          {todo.user.name}
        </a>
      )}
    </div>
  );
};
