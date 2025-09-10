import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => (
  <section className="TodoList">
    <article className="TodoInfo TodoInfo--completed">
      <h2 className="TodoInfo__title">{todo.title}</h2>
      <UserInfo todos={todo} />
    </article>
  </section>
);
