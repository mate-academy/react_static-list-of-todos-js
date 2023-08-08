
export const UserInfo = ({ todo }) => (
  <a className="UserInfo" href="mailto:Sincere@april.biz">
    {todo.user.name !== null && todo.user.name}
  </a>
);
