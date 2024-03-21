// Add the required props
import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  if (user) {
    const { name, email } = user;
    const emailHref = `mailto:${email}`;

    return (
      <a className="UserInfo" href={emailHref}>
        {name}
      </a>
    );
  }

  return <></>;
};
