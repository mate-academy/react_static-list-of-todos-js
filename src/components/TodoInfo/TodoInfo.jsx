import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => (
  <article className={todo.completed
  === true ? 'TodoInfo TodoInfo--completed' : 'TodoInfo'}
  >

    <h2 className="TodoInfo__title">{todo.title}</h2>
    <UserInfo user={todo.user} key={todo.id} />
  </article>
);
