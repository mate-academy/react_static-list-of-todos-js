// UserInfo.jsx
import React from 'react';

const UserInfo = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user.email}`}>
    {user.name}
  </a>
);

export default UserInfo;
