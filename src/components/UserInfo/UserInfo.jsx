import React from 'react';

export const UserInfo = ({ user }) => (
  <div className="UserInfo" data-cy="UserInfo">
    {user.name} <a href={`mailto:${user.email}`}>{user.email}</a>
  </div>
);
