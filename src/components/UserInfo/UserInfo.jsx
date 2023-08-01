// Add the required props

export const UserInfo = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user.email}`}>
    {user.name}
  </a>
);

// after 'git commit' {user} cancel my changes, i cant save 3rd string correct 