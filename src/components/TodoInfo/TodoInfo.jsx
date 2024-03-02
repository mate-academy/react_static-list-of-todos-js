// Add the required props

import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => {
  const classes = todo.completed ? 'TodoInfo TodoInfo--completed' : 'TodoInfo';

  return (
    <article className={classes}>
      <h2 className="TodoInfo__title">{todo.title}</h2>

      <UserInfo user={todo.user} />

      {/* <a className="UserInfo" href="mailto:Sincere@april.biz">
      Leanne Graham
    </a> */}
    </article>
  );
};
