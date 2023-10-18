import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => (

  <section className="TodoList">
    <article className={`TodoInfo ${todo.completed && 'TodoInfo--completed'}`}>
      <h2 className="TodoInfo__title">{todo.title}</h2>
    </article>
    <UserInfo user={todo.user} />
  </section>
);
