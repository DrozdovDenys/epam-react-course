import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getUser } from '../../store/selectors';

function PrivateRoute({ children }) {
	const { role } = useSelector(getUser);
	if (role === 'admin') return children;
	return <Navigate to='/courses' />;
}

export default PrivateRoute;
