// Add the required props
import React from 'react';

export const UserInfo = ({ user }) => {
  const userInfoName = user.name;
  const userInfoEmail = user.email;

  return (
    <div className="UserInfo">
      <a className="UserInfo__name" href={`mailto:${userInfoEmail}`}>
        {userInfoName}
      </a>
      <div className="UserInfo__email">{userInfoEmail}</div>
    </div>
  );
};
