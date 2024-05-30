import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo, users }) => (
  <article className={`TodoInfo ${todo.completed && 'TodoInfo--completed'}`}>
    <h2 className="TodoInfo__title">{todo.title}</h2>

    {users.find(user => user.id === todo.userId) && (
      <UserInfo user={users.find(user => user.id === todo.userId)} />
    )}
  </article>
);
