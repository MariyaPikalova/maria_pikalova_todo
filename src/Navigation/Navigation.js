import './navigation.scss';

export const Navigation = props => (
  <ul className="main-nav">
    {props.list.map((item, i) =>
      <li key={i}><a href={item}>{item}</a></li>)
    }
    { props.islogin && <li><a href="/">About</a></li> }
  </ul>
);
