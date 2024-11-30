// Add the required props
export const UserInfo = ({ user }) => {
  const { name, email, id } = user;

  return (
    <a key={id} className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
};
