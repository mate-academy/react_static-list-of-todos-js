export const UserInfo = ({ user, todo }) => (
  <>
    <a className="UserInfo" href={user.email} key={user.id}>
      {`${user.id === todo.userId ? user.name : ''}`}
    </a>
  </>
);
