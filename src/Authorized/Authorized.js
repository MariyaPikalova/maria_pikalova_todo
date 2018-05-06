import { Route, Switch, Redirect } from 'react-router-dom';
import { Main } from '../Main';
import { Gallery } from '../Gallery';
import { TaskList } from '../TaskList';
import { Task } from '../Task';

export const Authorized = () => (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/home" exact component={Main} />
    <Route path="/tasks" exact component={TaskList} />
    <Route path="/tasks/:task" exact component={Task} />
    <Route path="/gallery" exact component={Gallery} />
    <Redirect from="/login" to="/home" />
  </Switch>
);
