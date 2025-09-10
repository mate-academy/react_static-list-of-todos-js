
import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => ( //corrigido
  <article className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}>
    <h2 className="TodoInfo__title">{todo.title}</h2>
    {todo.user && <UserInfo user={todo.user} />}
  </article>
);


