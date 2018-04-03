import './main.scss';
import { Aside } from '../Aside';
import { Section } from '../Section';

const Error = ({ text, color }) => {
  // console.log(text);
  const styles = { color };
  return <mark style={styles}>{text || 'Some default text'}</mark>;
};

export const Main = () => (
  <React.Fragment>
    <div className="main-wrap">
      <Aside />
      <Section />
      <Error
        text="some text"
        color="red"
      />
    </div>
  </React.Fragment>
);
