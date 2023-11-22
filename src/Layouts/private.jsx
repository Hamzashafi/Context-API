import React, { memo } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../Hooks/useAuth';

const PrivateComponent = () => {
	const auth = useAuth();

	if (!auth) {
		// Redirect to the auth page if not authenticated
		return <Navigate to="/" replace />;
	}

	return (
		<div>
			<Outlet />
		</div>
	);
};

PrivateComponent.displayName = 'PrivateComponent'; // Set the display name here

const Private = memo(PrivateComponent);

export default Private;