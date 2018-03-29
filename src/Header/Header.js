import { Navigation } from '../Navigation';
import './header.scss';

export const Header = () => (
  <header>
    Header
    <Navigation islogin list={['Home', 'Products', 'Contacts']} />
  </header>
);
