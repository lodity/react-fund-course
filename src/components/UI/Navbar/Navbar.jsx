import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<header className="navbar">
			<div className="navbar__links">
				<Link to="/">Home</Link>
				<Link to="posts">Posts</Link>
				<Link to="about">About</Link>
			</div>
		</header>
	);
};

export default Navbar;
