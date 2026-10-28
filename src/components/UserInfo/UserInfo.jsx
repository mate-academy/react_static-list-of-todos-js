import React from 'react';

export const UserInfo = ({ user }) => {
  const { name, email } = user;

  return (
    <a href={`mailto:${email}`} className="UserInfo">
      <span className="UserInfo__name">{name}</span>
    </a>
  );
};

export default UserInfo;