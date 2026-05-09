import React from 'react';
import '../../api/users';
// Add the required props
export const UserInfo = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user.email}`}>
    {user.name}
  </a>
);
