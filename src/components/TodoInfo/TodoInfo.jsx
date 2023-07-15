import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => (
  <>
    <article className={todo.completed
      ? 'TodoInfo TodoInfo--completed'
      : 'TodoInfo'
    }
    >
      <h1 className="TodoInfo__title">{todo.title}</h1>
      <UserInfo user={todo.user} />
    </article>
  </>
);
