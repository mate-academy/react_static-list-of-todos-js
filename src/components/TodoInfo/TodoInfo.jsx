// Add the required props
// export const TodoInfo = () => <>TodoInfo markup</>;

// src/components/TodoInfo/TodoInfo.jsx

import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => (
  <div className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}>
    <div className="TodoInfo__title">{todo.title}</div>
    {todo.user && <UserInfo user={todo.user} />}
  </div>
);
