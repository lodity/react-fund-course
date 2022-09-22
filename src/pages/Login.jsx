import React, { useContext } from 'react';
import MyInput from '../components/UI/input/MyInput';
import MyButton from '../components/UI/button/MyButton';
import { AuthContext } from '../context';

const Login = () => {
	const { isAuth, setIsAuth } = useContext(AuthContext);
	const login = (e) => {
		e.preventDefault();
		setIsAuth(true);
		localStorage.setItem('auth', 'true');
	};

	return (
		<div>
			<h1>Login page</h1>
			<form onSubmit={login}>
				<MyInput type="text" placeholder="Your login..." />
				<MyInput type="password" placeholder="Your password..." />
				<MyButton>Log in</MyButton>
			</form>
		</div>
	);
};

export default Login;
