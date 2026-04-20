// Add the required props
import React from 'react';
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const { title, completed, user } = todo;

  // Формуємо рядок класів: базовий + модифікатор, якщо completed === true
  const articleClass = completed ? 'TodoInfo TodoInfo--completed' : 'TodoInfo';

  return (
    <article className={articleClass}>
      <h2 className="TodoInfo__title">{title}</h2>

      {/* Рендеримо UserInfo тільки якщо user існує */}
      {user && <UserInfo user={user} />}
    </article>
  );
};
