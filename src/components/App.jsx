import { useEffect } from 'react';
import { Routes, Route } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Layout } from './Layout/Layout';
import { Home } from 'pages/Home';
import { Contacts } from 'pages/Contacts';
import { About } from 'pages/About';
import { Registration } from 'pages/Registration';
import { Login } from 'pages/Login';
import { refreshUser } from 'redux/auth/operations';
import { selectIsLoading } from 'redux/auth/selectors';
import { PrivateRoute } from 'hoc/PrivateRoute';
import { PublicRoute } from 'hoc/PublicRoute';
import { Loader } from './Loader';

export const App = () => {
  const dispatch = useDispatch();
  const isRefresh = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(refreshUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ToastContainer position="top-center" theme="colored" autoClose={3000} />
      {isRefresh ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="contacts/"
              element={
                <PrivateRoute>
                  <Contacts />
                </PrivateRoute>
              }
            />
            <Route path="/about" element={<About />} />
            <Route
              path="register"
              element={
                <PublicRoute>
                  <Registration />
                </PublicRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
          </Route>
        </Routes>
      )}
    </>
  );
};
