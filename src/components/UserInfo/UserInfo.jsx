export const UserInfo = ({ user }) => (
  <a
    href={`mailto:${user.email}`}
    className="UserInfo"
    key={user.id}
  >
    {user.name}
  </a>
);
