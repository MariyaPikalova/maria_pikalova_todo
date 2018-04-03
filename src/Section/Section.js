import { Greeting } from '../Greeting';
import { TodoBoard } from '../TodoBoard';
import './section.scss';

export class Section extends React.Component {
  state = {
    users: [],
    posts: []
  };

  getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => data.json())
      .then(users => this.setState({
        users: users.sort((prev, next) => prev.name > next.name)
      }));
  }

  getUserPosts = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then(data => data.json())
      .then(posts => this.setState({ posts }));
  }

  render() {
    return (
      <React.Fragment>
        <section className="main-wrap-section">
          <Greeting name="User" />
          <TodoBoard />
          <br />
          <button onClick={this.getUsers}>Get users</button>
          <div className="user-block">
            {
              this.state.users.length > 0 ?
                <ul>
                  {this.state.users.map(user => (
                    <li
                      onClick={() => this.getUserPosts(user.id)}
                      key={user.id}
                    >
                      {user.name}
                    </li>
                  ))}
                </ul> : <span>Users are empty</span>
            }
            {
              this.state.posts && (
              <div>
                {this.state.posts.map(post => (
                  <span key={post.id}>{post.title}</span>
                ))}
              </div>
            )}
          </div>
        </section>
      </React.Fragment>
    );
  }
}
