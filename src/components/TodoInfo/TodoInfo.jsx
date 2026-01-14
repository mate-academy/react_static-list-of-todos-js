import { UserInfo } from "../UserInfo/UserInfo"

export const TodoInfo = ({todo}) => {
  const containerClass = `TodoInfo ${todo.completed
    ? 'TodoInfo--completed'
    : ''}`

  return (
    <article className={containerClass}>
        <h2 className="TodoInfo__title">{todo.title}</h2>
        {todo.user && <UserInfo user={todo.user} />}
      </article>
  )
}
