// Add the required props
import { UserInfo } from '../UserInfo/UserInfo';

import './TodoInfo.scss';

export const TodoInfo = ({ todo, user }) => {
  return <UserInfo user={user} completed={todo.completed} title={todo.title} />;
};
