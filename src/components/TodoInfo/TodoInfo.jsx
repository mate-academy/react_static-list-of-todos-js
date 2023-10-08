import './TodoInfo.scss';
// import usersFromServer from '../../api/users.json';
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => (
  <>
    <article className={`TodoInfo ${todo.completed && 'TodoInfo--completed'}`}>
      <h2 className="TodoInfo__title">
        {todo.title}
      </h2>

      {/* {todo.user
      && <UserInfo user={todo.user} key={todo.user.id} />
      } */}
      <UserInfo user={todo.user} key={todo.user.id} />
    </article>
  </>
);
