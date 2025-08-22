// src/components/UserInfo/UserInfo.jsx
import React from 'react';

export const UserInfo = ({ user }) => {
  // Apenas renderiza se o objeto user existir
  if (!user) {
    return null;
  }

  return (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
};
