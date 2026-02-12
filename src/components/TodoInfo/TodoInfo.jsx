import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
export const TodoInfo = ({ todo }) => (
<div className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`} data-cy="TodoInfo" >
<p className="TodoInfo__title">
{todo.title}</p>
{todo.user && <UserInfo user={todo.user} />}
</div> );
