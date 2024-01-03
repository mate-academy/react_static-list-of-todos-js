export const UserInfo = ({ user }) => (
  <a
    key={user.id}
    className="UserInfo"
    href={`mailto:${user.email}`}
  >
    {user.name}
  </a>
);
