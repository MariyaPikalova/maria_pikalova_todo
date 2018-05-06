import { Route, Switch, Redirect } from 'react-router-dom';
import { Login } from '../Login';

export const NotAuthorised = ({ setLoginState }) => (
  <Switch>
    <Route
      path="/login"
      render={() => <Login onLogin={setLoginState} />}
    />
    <Redirect to="/login" />
  </Switch>
);
