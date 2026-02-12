import React from 'react';
export const UserInfo = ({ user }) => (
<div className="UserInfo" data-cy="UserInfo">
<p className="UserInfo__name">
{user.name}</p>
<p className="UserInfo__email">
{user.email}</p>
</div> );
