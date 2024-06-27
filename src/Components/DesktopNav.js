import React from 'react';
import './DesktopNav.css';
import { routes } from './Routes';

export default function DesktopNav() {
	return (
		<div className='navbar'>
			<ul className='nav-menu'>
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
	);
}
