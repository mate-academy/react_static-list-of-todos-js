import {UserInfo}  from '../UserInfo'
import cn from 'classnames'
export const TodoInfo = ({todoElementInfo}) => {
  const { completed , title , user } = todoElementInfo
  return (
  <article className={
    cn('TodoInfo', {
      'TodoInfo--completed': completed,
    })
  }>
    <h2 className="TodoInfo__title">{title}</h2>
    {user && <UserInfo user={user} /> }

  </article>
)}

