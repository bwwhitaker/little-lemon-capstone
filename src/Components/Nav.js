import React from 'react';
import logo from '../icons_assets/Logo.svg';
import './Nav.css';
import { Link } from 'react-router-dom';
export default function Nav() {
	return (
		<div className='navbar'>
			<div className='Logo'>
				<Link to='/'>
					<img src={logo} alt='Little Lemon Logo' />
				</Link>
			</div>
		</div>
	);
}
