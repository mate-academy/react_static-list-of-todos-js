// Add the required props
import { UserInfo } from '../UserInfo/UserInfo';

import './TodoInfo.scss';

export const TodoInfo = ({ todo, users }) => {
  return users.map(user => {
    return <UserInfo user={user} todo={todo} />;
  });
};
