import PropTypes from 'prop-types';
import './tabs.scss';

export const TabNav = ({ list, select, active }) => {
  const onClick = (e, id) => {
    select(id);
    e.preventDefault();
  };

  return (
    <nav className="nav-tab">
      <ul>
        {list.map((el, index) =>
          (<li
            key={index}
            className={el.id === active ? 'active' : null}
          >
            <a
              href="/"
              onClick={e => onClick(e, index)}
            >
              {el}
            </a>
          </li>)
        )
        }
      </ul>
    </nav>);
};

TabNav.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  active: PropTypes.number,
  select: PropTypes.func
};

TabNav.defaultProps = {
  list: [],
  active: '',
  select: () => {}
};
