// Add the required props
import React from 'react';

const UserInfo = ({ user }) => {
  return (
    <div className="UserInfo">
      <p>User ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserInfo;
