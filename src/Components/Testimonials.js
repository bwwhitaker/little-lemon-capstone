import React, { PureComponent } from 'react';
import TestimonialCards from './TestimonialCards';

const testimonialCopy = [
	{
		name: 'Abby',
		stars: '4.5',
		review:
			"This is the best Italian and Mediterrean food that I've ever tried! And I've eaten at a lot of places. 100% recommend.",
	},
	{
		name: 'Brent',
		stars: '5',
		review:
			'I came to Little Lemon after a long day of driving. The food was delicious and the wine-pairing a great way to unwind.',
	},
	{
		name: 'Jules',
		stars: '5',
		review: 'This was the prefect meal to celebrate acing my finals. I would definitely order here again!',
	},
];

export default class Testimonials extends PureComponent {
	render() {
		return (
			<div className='testimonials-section'>
				<div className='testimonials-container'>
					<div className='testimonials-headers'>
						<h3>Testimonials</h3>
						<h4>Read what others have to say about us</h4>
					</div>
					<div className='reviews'>
						{testimonialCopy.map((testimonial) => {
							return <TestimonialCards key={testimonial.image} {...testimonial} />;
						})}
					</div>
				</div>
			</div>
		);
	}
}
