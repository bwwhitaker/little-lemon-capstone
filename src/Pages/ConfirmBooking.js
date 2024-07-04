import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

export default function ConfirmedBooking() {
	return (
		<div className='confirmation'>
			<div>
				<h2>Your booking is confirmed!</h2>
				<p className='confirm-msg'>Thank you for choosing to dine with us.</p>
				<p className='reminder'>We will send a reminder to your provided phone number and email.</p>
				<Link to='/'>
					<button>Home</button>
				</Link>
			</div>
		</div>
	);
}
