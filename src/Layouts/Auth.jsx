import React, { useMemo } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Hooks/useAuth';
import Login from '../components/Login';

const Auth = () => {
	const auth = useAuth();

	// The component will only re-render if 'auth' changes.
	const component = useMemo(() => {
		
		/* Ternary Operator*/
		
		return auth ? <Navigate to="/home" replace /> : <Login />;  
	}
	,[auth]);

	return component;
};

export default Auth;