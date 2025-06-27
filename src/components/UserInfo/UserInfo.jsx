export const UserInfo = ({ user }) => (
  <div className="UserInfo">
    <a href={`mailto:${user.email}`} data-cy="UserInfo">
      {user.name}
    </a>
  </div>
);
