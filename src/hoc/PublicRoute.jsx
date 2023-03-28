import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router';
import { selectorIsLoggedIn } from 'redux/auth/selectors';

export const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectorIsLoggedIn);
  const location = useLocation();
  const fromPage = location.state?.from.pathname || '/';
  if (isLoggedIn) {
    return <Navigate to={fromPage} />;
  }
  return children;
};
