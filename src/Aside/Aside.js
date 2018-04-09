import { Numbers } from '../Numbers';
import { ListOfUsers } from '../ListOfUsers';
import { Button } from '../Button';
import './aside.scss';

export const Aside = () => (
  <aside className="main-wrap-side-bar">
    <ListOfUsers />
    <Numbers from={5} to={13} />
    <Button />
  </aside>
);

