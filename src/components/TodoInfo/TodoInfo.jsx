import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => (
  <article className="TodoInfo TodoInfo--completed">
    <h2 className="TodoInfo__title">{todo.title}</h2>
    <UserInfo todo={todo} />
  </article>
);
