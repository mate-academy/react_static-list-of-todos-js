import React from 'react';

export const UserInfo = ({ user }) => {
  if (!user) return null; // на випадок, якщо користувача немає

  return (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
};

export default UserInfo;
