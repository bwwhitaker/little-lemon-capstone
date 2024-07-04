import React, { PureComponent } from 'react';
import TestimonialCards from './TestimonialCards';

const testimonialCopy = [
	{
		name: 'Abby',
		stars: '4.5',
		image:
			'https://images.unsplash.com/photo-1597957602900-97e95de20028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3601&q=80',
		review:
			"This is the best Italian and Mediterrean food that I've ever tried! And I've eaten at a lot of places. 100% recommend.",
	},
	{
		name: 'Brent',
		stars: '5',
		image:
			'https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=4000&q=80',
		review:
			'I came to Little Lemon after a long day of driving. The food was delicious and the wine-pairing a great way to unwind.',
	},
	{
		name: 'Jules',
		stars: '5',
		image:
			'https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=4000&q=80',
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
