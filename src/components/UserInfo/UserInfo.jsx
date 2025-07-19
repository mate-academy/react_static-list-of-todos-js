// Add the required props
import React from 'react';

export const UserInfo = ({ user }) => {
  if (!user) {
    return null;
  }

  return (
    <a href={`mailto:${user.email}`} className="UserInfo">
      {user.name}
    </a>
  );
};
