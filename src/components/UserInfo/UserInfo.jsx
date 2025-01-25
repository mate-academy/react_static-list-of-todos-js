// Add the required props

import React from 'react';
import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  return (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      <span className="UserInfo__name">{user.name}</span>
    </a>
  );
};
