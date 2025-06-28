ou use um editor como VSCode
code src/components/UserInfo/UserInfo.jsx
export const UserInfo = ({ user }) => (
  <div className="UserInfo">
    <a href={`mailto:${user.email}`}>
      {user.name} ({user.email})
    </a>
  </div>
import React from 'react';

export const UserInfo = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user.email}`}>
    {user.name}
  </a>

);
