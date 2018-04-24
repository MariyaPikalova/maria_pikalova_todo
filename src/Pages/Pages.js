import { NotAuthorised } from '../NotAuthorised';
import { Authorized } from '../Authorized';

export const Pages = ({ login, user, setLoginState }) => {
  return (
    login ?
      <Authorized user={user} /> :
      <NotAuthorised setLoginState={setLoginState} />
  );
};
