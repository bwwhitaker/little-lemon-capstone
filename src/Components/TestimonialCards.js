import React from 'react';
import star from '../icons_assets/star.png';

export default function TestimonialCards(props) {
	return (
		<div className='review'>
			<div className='reviews-wrapper'>
				<img src={props.image} alt='customer' className='client' />
				<div className='client-detail'>
					<h5>{props.name}</h5>
					<span className='stars'>
						{props.stars}
						<img src={star} alt='star' className='star' />
					</span>
					<p>
						<span className='quote'>"</span> {props.review} <span className='quote'>"</span>
					</p>
				</div>
			</div>
		</div>
	);
}
