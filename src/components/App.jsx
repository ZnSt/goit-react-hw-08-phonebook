import { useEffect } from 'react';
import { Routes, Route } from 'react-router';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Layout } from './Layout/Layout';
import { Home } from 'pages/Home';
import { Contacts } from 'pages/Contacts';
import { Registration } from 'pages/Registration';
import { Login } from 'pages/Login';
import { refreshUser } from 'redux/auth/operations';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contacts/" element={<Contacts />} />
          <Route path="register" element={<Registration />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
};
