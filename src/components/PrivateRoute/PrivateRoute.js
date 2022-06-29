import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({
    redirectPath = '/login',
    children 
}) => {
    const {user} = useAuth();
    const location = useLocation();
    if (!user.displayName) {
        return <Navigate to={redirectPath} replace state={{ from:  location }} />;
      }

      return children;
};

export default PrivateRoute;