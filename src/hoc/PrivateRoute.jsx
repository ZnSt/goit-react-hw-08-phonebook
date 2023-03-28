import { useLocation, Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { selectorIsLoggedIn } from 'redux/auth/selectors';
export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectorIsLoggedIn);
  const location = useLocation();
  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};
