import React from 'react';
import DesktopNav from './DesktopNav';
import './Header.css';
import MobileNav from './MobileNav';
import { Link } from 'react-router-dom';
import logo from '../icons_assets/Logo.svg';

export default function Header() {
	return (
		<div className='header'>
			<div className='header-section'>
				<div className='logo'>
					<Link to='/'>
						<img src={logo} alt='Little Lemon Logo' />
					</Link>
				</div>
				<div className='desktop-nav'>
					<DesktopNav />
				</div>
				<div className='mobile-nav'>
					<MobileNav />
				</div>
			</div>
		</div>
	);
}
