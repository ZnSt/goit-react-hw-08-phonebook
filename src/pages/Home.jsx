import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';

export const Home = () => {
  const user = useSelector(selectUser);
  return (
    <div style={{ textAlign: 'center', height: '100vh' }}>
      <h1>Hello, {user}!</h1>
      <p>
        Hey, man it is project Call me So, here you can save your contacts and
        arfet call your friend or girlfiend
      </p>
    </div>
  );
};
