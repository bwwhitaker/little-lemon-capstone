import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Reservations from './Pages/Reservations';
import OrderOnline from './Pages/OrderOnline';
import Login from './Pages/LogIn';
import Menu from './Pages/Menu';
import NoPage from './Pages/NoPage';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<Header />
			<div className='content'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/home' element={<Home />} />
					<Route path='/About' element={<About />} />
					<Route path='/Menu' element={<Menu />} />
					<Route path='/Reservations' element={<Reservations />} />
					<Route path='/OrderOnline' element={<OrderOnline />} />
					<Route path='/Login' element={<Login />} />
					<Route path='/*' element={<NoPage />} />
				</Routes>
			</div>

			<Footer />
		</div>
	);
}

export default App;
