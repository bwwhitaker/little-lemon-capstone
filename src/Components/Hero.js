import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../icons_assets/restauranfood.jpg';
import './Components.css';

export default function Hero() {
	return (
		<section className='hero-section'>
			<div className='hero-container'>
				<div className='hero-detail'>
					<h1>Little Lemon</h1>
					<h2>Chicago</h2>
					<p>
						We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
					</p>
					<Link to='reservations/'>
						<button aria-label='On-Click' className='button-hover'>
							Reserve a table
						</button>
					</Link>
				</div>
				<div className='hero-img'>
					<img src={heroImage} alt='' />
				</div>
			</div>
		</section>
	);
}
