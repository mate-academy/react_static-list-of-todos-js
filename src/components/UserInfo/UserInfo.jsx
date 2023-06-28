// Add the required props
export const UserInfo = ({ user }) => {
  const { name, email } = user;

  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      <p>
        {name}
      </p>
    </a>
  );
};
