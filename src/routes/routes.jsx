import React, { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../components/Login';
import Home from '../pages/Home/Home';
import Private from '../Layouts/private';
import Auth from '../Layouts/auth';
import ErrorPage from '../pages/notFound';




export const router = createBrowserRouter([
	{
		path: '/',
		element: <Auth />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: (
						<Login />
					
				),
			},
		],
	},
	{
		path: '/home',
		element: <Private />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: (
					
						<Home />
				),
			},
		],
	},
]);