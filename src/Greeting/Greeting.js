export const Greeting = (props) => {
  const hours = new Date().getHours();
  const name = props.name ? `, ${props.name}` : 'Unkown';
  if (hours > 22 || hours > 0 && hours <= 3) {
    return <p>{`Good night${name}!`}</p>;
  }
  if (hours > 3 && hours < 12) {
    return <p>{`Good morning${name}!`}</p>;
  }
  if (hours >= 12 && hours < 18) {
    return <p>{`Good afternoon${name}!`}</p>;
  }
  return <p>{`Good evening${name}!`}</p>;
};
