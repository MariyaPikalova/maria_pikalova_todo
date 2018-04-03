const users = [
  { firstName: 'Leanne', lastName: 'Graham', age: 23 },
  { firstName: 'Ervin', lastName: 'Howell', age: 24 },
  { firstName: 'Clementine', lastName: 'Bauch', age: 25 },
];

const User = props => (
  <ul>
    <li>{`full name: ${props.firstName} ${props.lastName}, age: ${props.age}`}</li>
  </ul>
);

export const ListOfUsers = () => (
  <div>
    {users.map((user, i) => (
      <User
        key={i}
        firstName={user.firstName}
        lastName={user.lastName}
        age={user.age}
      />
    ))}
  </div>
);
