// Add the required props
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => (
  <div className="TodoList">
    <article
      className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
      key={todo.id}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>
      <UserInfo user={todo.user} />
    </article>
  </div>
);
