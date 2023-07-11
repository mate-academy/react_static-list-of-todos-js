// Add the required props

export const UserInfo = ({ name, email }) => (
  <a className="UserInfo" href={`mailto:${email}`}>
    { name }
  </a>
);
