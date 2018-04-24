import { Header } from './Header';
import { Footer } from './Footer';
import { Pages } from './Pages';
import './app.scss';

export class App extends Component {
  state = {
    login: true,
    user: ''
  }

  setLoginState = (login, user) => {
    this.setState({ login, user });
  }

  render() {
    const { login, user } = this.state;

    return (

      <React.Fragment>
        <div className="container">
          <Header
            login={login}
            user={user}
            logout={this.setLoginState}
          />
          <Pages
            login={login}
            setLoginState={this.setLoginState}
            user={user}
          />
          <Footer />
        </div>
      </React.Fragment>

    );
  }
}
