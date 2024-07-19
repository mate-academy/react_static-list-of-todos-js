import { UserInfo } from '../UserInfo/UserInfo';

// Add the required props
export const TodoInfo = ({ todos }, { users }) => (
  <>
    {todos.map(todo => (
      <article
        className={`TodoInfo ${todo.completed === true ? 'TodoInfo--completed' : ''}`}
      >
        <h2 className="TodoInfo__title">{todo.title}</h2>
        <UserInfo users={users} todo={todo} />
      </article>
    ))}
  </>
);
