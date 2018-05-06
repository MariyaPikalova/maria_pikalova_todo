import './login.scss';

export const Login = ({ onLogin }) => {
  const submit = (e) => {
    const value = e.target.name.value;

    e.preventDefault();

    setTimeout(() => {
      onLogin(true, value);
    }, 500);
  };

  return (
    <form
      className="task"
      onSubmit={submit}
    >
      <input
        type="text"
        placeholder="NAME"
        name="name"
        required
      />
      <input
        type="text"
        placeholder="PASSWORD"
        required
      />
      <input
        type="submit"
        value="LOGIN"
      />
    </form>
  );
};
