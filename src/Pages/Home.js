import React from 'react';
import Hero from '../Components/Hero';
import Testimonials from '../Components/Testimonials';
import AboutSection from '../Components/AboutSection';
import Highlights from '../Components/Highlights';
import '../App.css';

export default function Home() {
	return (
		<div className='content'>
			<Hero />
			<Highlights />
			<Testimonials />
			<AboutSection />
		</div>
	);
}
