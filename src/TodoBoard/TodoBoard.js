import './TodoBoard.scss';

export class TodoBoard extends Component {
  state = {
    todo: 10,
    done: 3,
    progress: 1,
    waiting: 5,
    user: 'Masha'
  };
  render() {
    return (
      <div className="board">
        <span>Hello, {this.state.user}</span>
        <p>You have {this.state.todo} tasks</p>
        <p>Done: {this.state.done}</p>
        <p>In progress: {this.state.progress}</p>
        <p>Waiting: {this.state.waiting}</p>
        <a href="/">Go to the task list</a>
      </div>
    );
  }
}
