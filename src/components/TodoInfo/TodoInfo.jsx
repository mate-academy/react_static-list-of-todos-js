// Add the required props
import { UserInfo } from "../UserInfo/UserInfo";
import cn from "classnames";

export const TodoInfo = ({ todo: { userId, completed, title, user } }) => (
  <article className={cn('TodoInfo', {'TodoInfo--completed' : completed})}>
    <h2 className="TodoInfo__title">{title}</h2>

    <UserInfo user={user} />
  </article>
);
