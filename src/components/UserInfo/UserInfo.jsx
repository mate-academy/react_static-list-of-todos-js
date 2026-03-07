// Add the required props
export const UserInfo = ({ user, todo }) => {
  const { name, email } = user;
  const { completed, title } = todo;

  return (
    <article
      className={`TodoInfo ${completed === true ? 'TodoInfo--completed' : ''}`}
    >
      <h2 className="TodoInfo__title">{title}</h2>
      <a className="UserInfo" href={email}>
        {name}
      </a>
    </article>
  );
};
