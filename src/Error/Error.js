export const Error = ({ text, color }) => {
  // console.log(text);
  const styles = { color };
  return <mark style={styles}>{text || 'Error'}</mark>;
};
