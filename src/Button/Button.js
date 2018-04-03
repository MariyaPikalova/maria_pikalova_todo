import './button.scss';

export class Button extends Component {
  state = {
    class: ''
  }

  makeToggle = () => {
    this.setState({ class: this.state.class ? '' : 'active' });
  }
  render() {
    return (
      <div className="text">
        <button
          id="active"
          onClick={this.makeToggle}
          className={this.state.class}
        >
          {this.state.class ? 'hide' : 'show'}
        </button>
        {this.state.class && <span>Phenomenans yell with collision course!</span>}
      </div>
    );
  }
}
