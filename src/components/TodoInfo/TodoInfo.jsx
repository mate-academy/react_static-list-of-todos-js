// Add the required props
import { UserInfo } from "../UserInfo/UserInfo";
export const TodoInfo = ({toDo}) =>
  <>
    <article className={`TodoInfo ${toDo.completed ? "TodoInfo--completed" : ""}`}>
      <h2 className="TodoInfo__title">{toDo.title}</h2>

      {toDo.user ?
        <UserInfo user={toDo.user} />
      : null}
    </article>
  </>;

