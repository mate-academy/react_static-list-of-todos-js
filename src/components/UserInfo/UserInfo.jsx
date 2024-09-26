import React from 'react';

export function UserInfo({ user: { name, email } }) {
  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
}
