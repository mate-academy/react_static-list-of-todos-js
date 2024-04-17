// Add the required props
import './TodoInfo.scss';

import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => (
  <>
    <article className={`TodoInfo ${todo.completed && 'TodoInfo--completed'}`}>
      <h2 className="TodoInfo__title" key={todo.id}>
        {todo.title}
      </h2>
      <UserInfo user={todo.user} />
    </article>
  </>
);
