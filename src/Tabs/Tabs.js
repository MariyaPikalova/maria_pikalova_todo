import PropTypes from 'prop-types';
import './tabs.scss';
import { TabNav } from './TabNav';
import { Tab } from './Tab';

export class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0
    };
  }

  clickTab = (id) => {
    this.setState({ id });
  }

  render() {
    const tabs = this.props.children.filter(child => child.type === Tab);
    const links = tabs.map(tab => tab.props.title);
    const contents = tabs.map(tab => tab.props.children);
    return (
      <section className="main-wrap tabs">
        <TabNav
          list={links}
          active={this.state.id}
          select={this.clickTab}
        />
        <br />
        <div className="tab-content">
          {contents[this.state.id]}
        </div>
      </section>
    );
  }
}

Tabs.propTypes = {
  children: PropTypes.array.isRequired
};
