import { React } from 'react';
import { UserInfo } from '../UserInfo';
import './TodoInfo.scss';

export const TodoInfo = ({ todo }) => {
  const {completed, title, user} = todo;

  const cls = [
    'TodoInfo',
    completed ? 'TodoInfo--completed' : '',
  ];

  return (
    <article className={cls.join(' ')}>
      <h2 className="TodoInfo__title">{title}</h2>

      {user && (
        <UserInfo user={user} />
      )}
    </article>
  );
};
