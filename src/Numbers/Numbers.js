export const Numbers = (props) => {
  let numbers = [];
  for (let i = props.from; i <= props.to; i++) {
    numbers.push(i);
  }
  if (props.odd) {
    numbers = numbers.filter(num => num % 2);
  }
  if (props.even) {
    numbers.filter(num => !num % 2);
  }

  return (
    <div className="side-bar-items">
      <ul>
        {numbers.map((num, i) => <li key={i}>{num}</li>)}
      </ul>
    </div>
  );
};
