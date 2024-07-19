export const UserInfo = ({ users }, todo) => (
  <>
    {users.map(user => (
      <a className="UserInfo" href={user.email} key={user.id}>
        {`${user.id === todo.userId ? user.name : ''}`}
      </a>
    ))}
  </>
);
