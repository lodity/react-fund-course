import React from 'react';
import './styles/App.css';
import Navbar from './components/UI/Navbar/Navbar';
import AppRouter from './components/AppRouter';

function App() {
	return (
		<div>
			<Navbar />
			<div className="App">
				<AppRouter />
			</div>
		</div>
	);
}

export default App;
