export const UserInfo = ({ user }) => (
  <a
    className="UserInfo"
    target="_blank"
    rel="noreferrer"
    href={`mailto:${user.email}`}
  >
    {user.name}
  </a>
);
