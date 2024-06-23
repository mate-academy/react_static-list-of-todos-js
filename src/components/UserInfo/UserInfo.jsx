import './UserInfo.scss';

export const UserInfo = ({ user: { name, email } }) => {
  const emailHref = `mailto:${email}`;

  return (
    <a className="UserInfo" href={emailHref}>
      {name}
    </a>
  );
};
