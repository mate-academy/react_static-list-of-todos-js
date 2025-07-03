import React from 'react';

export const UserInfo = ({ user }) => {
  if (!user) {
    return (
      <div className="UserInfo">
        <p className="UserInfo__name">Unknown user</p>
      </div>
    );
  }

  return (
    <div className="UserInfo">
      <p className="UserInfo__name">{user.name}</p>
      <a className="UserInfo__email" href={`mailto:${user.email}`}>
        {user.email}
      </a>
    </div>
  );
};
