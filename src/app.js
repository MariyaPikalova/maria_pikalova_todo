import ReactDom from 'react-dom';
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';
import './app.scss';

const component = (
  <div className="container">
    <h1>ROOT COMPONENT</h1>
    <Header />
    <Main />
    <Footer />
  </div>
);
ReactDom.render(component, document.getElementById('app'));
