import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './navigation.scss';

export const Navigation = ({ list, user }) => (

  <ul className="main-nav">
    {list.map((item) => {
      const href = `/${item.toLowerCase()}`;

      return (
        <li key={item}>
          <NavLink
            to={href}
            exact
            activeClassName="active"
          >
            {item}
          </NavLink>
        </li>
      );
    })
    }
    {
      user &&
      <li>
        <NavLink
          to="/user_page"
          exact
          activeClassName="active"
        >
          {user}
        </NavLink>
      </li>
    }
  </ul>
);

Navigation.defaultProps = {
  list: [],
};

Navigation.propTypes = {
  list: PropTypes.array,
};
