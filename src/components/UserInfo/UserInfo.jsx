const MakeHref = user => `mailto:${user.email}`;

export const UserInfo = ({ user }) => (
  <a className="UserInfo" href={MakeHref(user)}>
    {user.name}
  </a>
);
