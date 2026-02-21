import React from 'react';

// Add the required props
export const UserInfo = ({ user }) => {
  return (
    <a href={`mailto:${user.email}`} className="UserInfo">
      {user.name}
    </a>
  );
};
