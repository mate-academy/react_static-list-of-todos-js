export const UserInfo = ({
  user: {
    name,
    email,
  },
}) => (
  <a
    className="UserInfo"
    target="_blank"
    rel="noreferrer"
    href={`mailto:${email}`}
  >
    {name}
  </a>
);
