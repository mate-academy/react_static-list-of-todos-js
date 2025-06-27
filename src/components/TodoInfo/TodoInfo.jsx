import { UserInfo } from '../UserInfo/UserInfo'; // Importăm componenta UserInfo

export const TodoInfo = ({ todo }) => (
  <article
    className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
    data-cy="Todo"
  >
    <h2 className="TodoInfo__title" data-cy="TodoTitle">
      {todo.title}
    </h2>

    {todo.user && <UserInfo user={todo.user} />}

    {todo.completed && (
      <p className="TodoInfo__completed" data-cy="TodoCompleted">
        Completed
      </p>
    )}
  </article>
);
