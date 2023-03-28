import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { selectorIsLoggedIn } from 'redux/auth/selectors';
export const Home = () => {
  const user = useSelector(selectUser);
  const isLoggenIn = useSelector(selectorIsLoggedIn);
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Hello, {isLoggenIn ? user : 'man'}!</h1>
      <p>
        Hey, man it is project Call me So, here you can save your contacts and
        arfet call your friend or girlfiend
      </p>
    </div>
  );
};
