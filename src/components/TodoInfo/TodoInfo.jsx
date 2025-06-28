// src/components/TodoInfo/TodoInfo.jsx
import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => (
  <div className="TodoInfo">
    <h3 className="TodoInfo__title">{todo.title}</h3>
    <p>
      <UserInfo user={todo.user} />
    </p>
  </div>
);
