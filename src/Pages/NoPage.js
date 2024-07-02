import React from 'react';
import './Pages.css';

export default function NoPage() {
	var link = <a href={'/'}> home</a>;
	return (
		<div className='temp-page'>
			<h1>Oops! This page either got eaten or is a family recipe. Go back to {link}.</h1>
		</div>
	);
}
