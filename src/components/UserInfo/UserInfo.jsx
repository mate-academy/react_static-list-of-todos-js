export const UserInfo = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user.email}`} data-cy="UserInfo">
    {user.name}
  </a>
);
