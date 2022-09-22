import React from 'react';
import HomePage from '../pages/HomePage';
import Posts from '../pages/Posts';
import About from '../pages/About';
import NotFoundPage from '../pages/NotFoundPage';
import PostIdPage from '../pages/PostIdPage';
import Login from '../pages/Login';
import { Navigate } from 'react-router-dom';

export const privateRoutes = [
	{ path: '/', element: <HomePage /> },
	{ path: '/posts', element: <Posts /> },
	{ path: '/posts/:id', element: <PostIdPage /> },
	{ path: '/about', element: <About /> },
	{ path: '/login', element: <Navigate to="/posts" /> },
	{ path: '*', element: <NotFoundPage /> },
];

export const publicRoutes = [
	{ path: '/login', element: <Login /> },
	{ path: '*', element: <Navigate to="/login" /> },
];
