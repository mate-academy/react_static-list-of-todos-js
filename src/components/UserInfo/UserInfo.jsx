// eslint-disable-next-line prettier/prettier
export const UserInfo = ({ user} ) => (
  <a className="UserInfo" href={`mailto:${user.email}`}>
    {user.name}
  </a>
);
