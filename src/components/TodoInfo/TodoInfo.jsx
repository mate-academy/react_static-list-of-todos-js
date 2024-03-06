import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  <>
    <article className={`TodoInfo ${todo.completed && 'TodoInfo--completed'}`}>
      <h2 className="TodoInfo__title">{todo.title}</h2>

      <a className="UserInfo" href="mailto:Sincere@april.biz">
        {todo.user && <UserInfo user={todo.user} key={todo.user.id} />}
      </a>
    </article>
  </>;
};
