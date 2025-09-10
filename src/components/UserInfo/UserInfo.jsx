export const UserInfo = (todo, users) => (
  <a className="UserInfo" href={users.email}>
    {users.name}
  </a>
);
