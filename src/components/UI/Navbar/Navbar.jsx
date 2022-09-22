import React from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../button/MyButton';
import { useContext } from 'react';
import { AuthContext } from '../../../context';

const Navbar = () => {
	const { isAuth, setIsAuth } = useContext(AuthContext);

	const logout = () => {
		setIsAuth(false);
		localStorage.removeItem('auth');
	};

	return (
		<header className="navbar">
			<MyButton onClick={logout}>Log out</MyButton>
			<div className="navbar__links">
				<Link to="/">Home</Link>
				<Link to="posts">Posts</Link>
				<Link to="about">About</Link>
			</div>
		</header>
	);
};

export default Navbar;
