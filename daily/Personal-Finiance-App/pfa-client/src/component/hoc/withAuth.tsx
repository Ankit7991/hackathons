import React, { useEffect, useState } from 'react'
import {Navigate} from 'react-router-dom';

export const withAuth = (Component: any) => {
	return (props: any) => {
		const [token, setToken] = useState<null | string>(null);
		useEffect(() => {
			const token = localStorage.getItem('token');
			setToken(token);
		}, []);

		if (token) {
			return <Component {...props} />;
		} else {
			// Redirect to login page if token is not present
			// return <Navigate to="/login" replace />;
			return <h1>Unauthorized</h1>
		}

	}
}
