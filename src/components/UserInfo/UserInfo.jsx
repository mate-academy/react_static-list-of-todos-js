import './UserInfo.scss';

export const UserInfo = ({ user: { email, name } }) => (
  <a className="UserInfo" href={`mailto:${email}`}>
    {name}
  </a>
);
