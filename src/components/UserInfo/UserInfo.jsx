export const UserInfo = ({ user }) => (
  <div className="UserInfo">
    <p className="UserInfo__name">{user.name}</p>

    <a className="UserInfo__email" href={`mailto:${user.email}`}>
      {user.email}
    </a>
  </div>
);
