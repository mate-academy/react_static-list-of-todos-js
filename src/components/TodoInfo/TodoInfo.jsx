// Add the required props
import { UserInfo } from "../UserInfo/UserInfo"

export const TodoInfo = ({todo}) => (
    <article className={todo.completed ? "TodoInfo TodoInfo--completed" : "TodoInfo"} >
        <h2 className="TodoInfo__title">{todo.title}</h2>

        <UserInfo user={todo.user} />
      </article>
)


// Если completed: true мы добавляем класс TodoInfo--completed, если false класс остается только TodoInfo
