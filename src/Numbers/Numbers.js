export const Numbers = (props) => {
  let numbers = [];
  for (let i = props.from; i <= props.to; i++) {
    numbers.push(i);
  }
  if (props.odd) {
    numbers = numbers.filter(num => num % 2 !== 0);
  } else if (props.even) {
    numbers = numbers.filter(num => num % 2 === 0);
  } else if (!props.odd && !props.even) {
    return null;
  }

  return (
    <div>
      <ul>
        {numbers.map((num, i) => <li key={i}>{num}</li>)}
      </ul>
    </div>
  );
};
