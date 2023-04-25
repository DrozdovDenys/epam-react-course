import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ userRole, children }) => {
	if (userRole === 'admin') return children;
	return <Navigate to='/courses' />;
};

export default PrivateRoute;
