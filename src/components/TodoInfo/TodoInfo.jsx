import { React } from 'react';
import { UserInfo } from '../UserInfo';
import './TodoInfo.scss';

export const TodoInfo = ({ todo }) => {
  const cls = [
    'TodoInfo',
    todo.completed ? 'TodoInfo--completed' : '',
  ];

  return (
    <article className={cls.join(' ')}>
      <h2 className="TodoInfo__title">{todo.title}</h2>

      {todo.user && (
        <UserInfo user={todo.user} />
      )}
    </article>
  );
};
