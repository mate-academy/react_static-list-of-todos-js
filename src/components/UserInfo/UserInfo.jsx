import React from 'react';

export const UserInfo = ({ user }) => {
  if (!user) {
    return <p className="UserInfo">User not found</p>;
  }

  return (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
};
