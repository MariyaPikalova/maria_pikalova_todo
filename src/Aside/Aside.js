import { Numbers } from '../Numbers';
import { ListOfUsers } from '../ListOfUsers';
import './aside.scss';

const List = ({ list, field, ordered }) => {
  const items = (list || [])
    .map(el => <li key={el.id}>{el[field || 'name']}</li>);
  return ordered ? <ol>{items}</ol> : <ul>{items}</ul>;
};
const users = [
  { id: 123, name: 'Patrik' },
  { id: 46, name: 'Teresa' },
  { id: 78, name: 'John' }
];
const getProps = (list, field, ordered) => ({
  list,
  field,
  ordered
});

export const Aside = () => (
  <aside className="main-wrap-side-bar">
    <ListOfUsers />
    <List
      {...getProps(users, 'name', true)}
      /* list={ users }
      field='name'
      ordered */
    />
    <Numbers from={5} to={13} odd />
  </aside>
);
