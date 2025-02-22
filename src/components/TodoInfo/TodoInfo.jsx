// Add the required props
import classNames from "classnames";
import { UserInfo } from "../UserInfo/UserInfo";

export const TodoInfo = ({ todo }) => {
  return (
    <article className={classNames("TodoInfo", todo.completed === true ? "TodoInfo--completed" : "")}>
      <h2 className="TodoInfo__title"
      >{todo.title}</h2>
      {todo.user && <UserInfo user={todo.user} key={todo.user.id} />}
    </article>
  );
};
