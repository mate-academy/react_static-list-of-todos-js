import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => (
  <div>
    <article className="TodoInfo">
      <div className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}>
        <h2 className="TodoInfo__title">{todo.title}</h2>
        {todo.user && <UserInfo user={todo.user} key={todo.id} />}
      </div>
    </article>
  </div>
);
