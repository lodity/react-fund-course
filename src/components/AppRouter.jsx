import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Posts from '../pages/Posts';
import About from '../pages/About';
import NotFoundPage from '../pages/NotFoundPage';
import PostIdPage from '../pages/PostIdPage';

const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/posts" element={<Posts />} />
			<Route path="/posts/:id" element={<PostIdPage />} />
			<Route path="/about" element={<About />} />
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	);
};

export default AppRouter;
