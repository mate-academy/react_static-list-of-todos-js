import React from 'react';
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const { title, completed, user } = todo;

  // Додаємо модифікатор для виконаних завдань
  const containerClass = completed
    ? 'TodoInfo TodoInfo--completed'
    : 'TodoInfo';

  return (
    <article className={containerClass}>
      <h2 className="TodoInfo__title">{title}</h2>

      {/* Рендеримо користувача, тільки якщо todo.user існує */}
      {user && <UserInfo user={user} />}
    </article>
  );
};
