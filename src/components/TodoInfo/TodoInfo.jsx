// Add the required props

import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  let className = 'TodoInfo';

  if (todo.completed) {
    className += ' TodoInfo--completed';
  }

  return (
    <div className={className}>
      <h3 className="TodoInfo__title">{todo.title}</h3>
      {todo.user && <UserInfo user={todo.user} />}
    </div>
  );
};
