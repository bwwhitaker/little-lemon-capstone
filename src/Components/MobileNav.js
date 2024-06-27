import React, { useState, useEffect, useRef } from 'react';
import logo from '../icons_assets/Logo.svg';
import { Link } from 'react-router-dom';
import hamburger from '../icons_assets/🦆 icon _hamburger menu.svg';
import { routes } from './Routes';
import './MobileNav.css';

export default function MobileNav() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuRef = useRef(null);

	const toggleMenu = () => {
		setIsMenuOpen((prevState) => !prevState);
	};

	const handleClickOutside = (event) => {
		if (menuRef.current && !menuRef.current.contains(event.target)) {
			setIsMenuOpen(false);
		}
	};

	useEffect(() => {
		if (isMenuOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		} else {
			document.removeEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isMenuOpen]);

	return (
		<div className='navbar'>
			<div className='hamburger'>
				<img src={hamburger} alt='Menu' onClick={toggleMenu} />
			</div>
			{isMenuOpen && (
				<div className='dropdown-menu' ref={menuRef}>
					<div>
						<ul className='no-bullets'>
							{routes.map((route) => {
								const { href, title } = route;
								return (
									<li key={route.title} className=''>
										<a href={href} className=''>
											{title}
										</a>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			)}
		</div>
	);
}
