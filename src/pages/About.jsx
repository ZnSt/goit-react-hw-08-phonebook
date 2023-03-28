import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';

export const About = () => {
  const user = useSelector(selectUser);
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Congratulate, {user}!</h1>
      <p>Hey man! If you can find this page it means you are registered</p>
    </div>
  );
};
