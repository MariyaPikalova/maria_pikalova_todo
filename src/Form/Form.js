import PropTypes from 'prop-types';
import './form.scss';


export class Form extends Component {
  constructor(props) {
    super(props);

    this.fields = [
      { label: 'email', reg: /^\w+@\w+\.[a-z]{2,}$/ },
      { label: 'first name', reg: /^[^ ]{3,20}$/ },
      { label: 'last name', reg: /^[^ ]{3,20}$/ },
      { label: 'password', reg: /^[^ ]{6,20}$/, secure: true },
      { label: 'repeat password', reg: /^[^ ]{6,20}$/, secure: true }
    ];

    this.state = {
      error: ''
    };
    this.fields.forEach(field => (this.state[field.label] = { value: '' }));
  }

  setValue = ({ target }) => {
    this.setState({
      [target.name]: { value: target.value }
    });
  }

  validate = (index) => {
    const field = this.fields[index];
    const stateField = this.state[field.label];
    // this.state = { email: { value: 'text' } ...}
    // stateField = { value: 'text' }

    if (field.reg.test(stateField.value)) {
      stateField.error = '';
      // { value: 'text', error: '' }
    } else {
      stateField.error = `${field.label} is invalid`;
      // { value: 'text', error: '...' }
    }

    this.setState({
      [field.label]: stateField
    });
  }

  getDisabledState() {
    const { excluded = [], disabled = [] } = this.props;

    return this.fields
      .filter(({ label }) => !excluded.includes(label) && !disabled.includes(label))
      .some(({ label }) => {
        const { value, error } = this.state[label];
        return !value || error;
      });
  }

  save = (event) => {
    const { state } = this;
    let error = '';
    const password = 'password';

    event.preventDefault();

    if (state[password].value !== state['repeat password'].value) {
      error = 'Password should be the same';
    }
    this.setState({ error });

    if (error) return;
    this.getFormValues();
  }

  getFormValues() {
    const form = {};

    this.fields.forEach((field) => {
      form[field.label] = this.state[field.label].value;
    });
    return form;
  }

  render() {
    const { state, fields } = this;
    const { excluded, disabled } = this.props;

    return (
      <form
        className="form"
        onSubmit={this.save}
      >
        <ul>{fields
          .filter(({ label }) => !excluded.includes(label)) // ['email'].include('email')
          .map(({ label, secure }, index) => {
          const stateField = state[label]; // this.state['email'] = { value: '' }

          return (
            <li key={label}>
              <input
                type={secure ? 'password' : 'text'}
                name={label}
                className={stateField.error ? 'error' : 'correct'}
                placeholder={label.toUpperCase()}
                value={stateField.value}
                onChange={this.setValue}
                onBlur={() => this.validate(index)}
                disabled={disabled.includes(label)}
              />
              {stateField.error && <span>{stateField.error}</span>}
            </li>
          );
        })}
        </ul>

        {state.error && <span className="error-text">{state.error}</span>}

        <input
          type="submit"
          value="Save"
          disabled={this.getDisabledState()}
        />
      </form>
    );
  }
}

Form.propTypes = {
  excluded: PropTypes.array,
  disabled: PropTypes.array
};

Form.defaultProps = {
  excluded: [],
  disabled: []
};
