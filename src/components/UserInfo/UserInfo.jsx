// Add the required props

import users from '../../api/users.json';

export const UserInfo = ({ user }) => {
  if (!users) {
    return null;
  }

  return (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
};
