import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
	return (
		<div>
			<h1 style={{ textAlign: 'center' }}>
				Error 404 Go <Link to="/">Home</Link>
			</h1>
		</div>
	);
};

export default NotFoundPage;
