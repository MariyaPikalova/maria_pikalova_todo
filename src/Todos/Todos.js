import './todos.scss';


export class Todos extends Component {
  constructor(prop) {
    super(prop);
    this.originTodos = [];
    this.state = { todos: this.originTodos };
    this.icons = ['done', 'inprogress', 'delete'];
    this.getTodos();
  }

  getTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(response => response.json())
      .then((todos) => {
        this.originTodos = todos;
        this.setState({ todos });
      });
  };

  componentDidMount() {
    this.getTodos();
  }

  filterTodos = (e) => {
    if (e.target.value.length > 1) {
      this.setState({
        todos: this.originTodos.filter(value => value.title.indexOf(e.target.value) !== -1)
      });
    } else {
      this.setState({ todos: this.originTodos });
    }
  }

  changeStatus = id => id;

  render() {
    const { todos } = this.state;
    return (
      <div>
        <input
          type="text"
          onChange={this.filterTodos}
        />
        <ul className="todo">
          {todos.map(todo => (
            <li
              key={todo.id}
              className={todo.completed ? 'todo completed' : 'todo'}
            >
              {todo.title}
              <span>
                {this.icons.map(icon => (
                  <icon
                    key={icon}
                    className={icon}
                    onClick={() => this.changeStatus(todo.id)}
                  />))
                }
              </span>
            </li>))}
        </ul>
      </div>
    );
  }
}
