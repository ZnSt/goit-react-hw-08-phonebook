import { Routes, Route } from 'react-router';
import { Layout } from './Layout/Layout';
import { Home } from 'pages/Home';
import { Contacts } from 'pages/Contacts';
import { Registration } from 'pages/Registration';
import { Login } from 'pages/Login';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contacts/" element={<Contacts />} />
        <Route path="register" element={<Registration />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
};
