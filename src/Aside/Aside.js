import { Form } from '../Form';
import { Todos } from '../Todos';
import { Button } from '../Button';
import { TextEdit } from '../TextEdit';
import './aside.scss';

export const Aside = () => (
  <aside className="main-wrap-side-bar">
    <Button />
    <br />
    <Form excluded={['email']} />
    <br />
    <TextEdit />
    <br />
    <img src="./images/science.jpg" alt="science-img" />
    <br />
    <Todos />
  </aside>
);

