import { Greeting } from '../Greeting';
import './section.scss';

export const Section = () => (
  <React.Fragment>
    <section className="main-wrap-section">
      <Greeting name="User" />
    </section>
  </React.Fragment>
);
