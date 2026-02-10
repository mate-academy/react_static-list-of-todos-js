import React from 'react';

export const UserInfo = ({ user }) => {
  return (
    <a href={`mailto:${user.email}`} className="UserInfo" data-cy="UserInfo">
      {user.name}
    </a>
  );
};
