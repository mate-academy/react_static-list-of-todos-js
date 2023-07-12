// Add the required props
export const UserInfo = ({ todo }) => (
  todo.user && (
    <a className="UserInfo" href={todo.user.email}>
      {todo.user.name}
    </a>
  )
);
