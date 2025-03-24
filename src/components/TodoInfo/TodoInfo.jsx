// Add the required props

export const TodoInfo = ({ todo }) => {
  const todoClass = `TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`;

  return (
    <div className={todoClass}>
      <p className="TodoInfo__title">
        {todo.title}
      </p>

      {todo.user && <UserInfo user={todo.user} />}
    </div>
  );
};
