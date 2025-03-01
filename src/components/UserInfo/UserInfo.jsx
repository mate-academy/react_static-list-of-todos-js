import React from 'react';
import './UserInfo.css';

function UserInfo({ user }) {
    return (
        <div className="UserInfo" data-cy="user">
            <p className="UserInfo__name">{user.name}</p>
        </div>
    );
}

export default UserInfo;
