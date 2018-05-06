import { Navigation } from '../Navigation';
import './header.scss';

export const Header = ({ user, login, logout }) => {
  const items = ['HOME', 'TASKS', 'GALLERY'];
  return (
    <header>
      <a href="/"><img src="./images/logo.png" alt="Todoist" /></a>

      <Navigation list={items} user={user} />
      { login && <span><button onClick={() => logout()}>LOGOUT</button></span> }
    </header>
  );
};
