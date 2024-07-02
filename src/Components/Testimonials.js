import React, { PureComponent } from 'react';
import TestimonialCards from './TestimonialCards';

const testimonialCopy = [
	{
		name: 'Alexis',
		stars: '4.5',
		image:
			'https://images.unsplash.com/photo-1597957602900-97e95de20028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3601&q=80',
		review: "This is the best Mediterranean food that I've ever had!",
	},
	{
		name: 'Brian',
		stars: '5',
		image:
			'https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=4000&q=80',
		review:
			'I came to Little Lemon after a 5 hour flight from the East Coast. The food here tasted so delicious after the trip here.',
	},
	{
		name: 'Lucy',
		stars: '5',
		image:
			'https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=4000&q=80',
		review:
			'This restaurant served as a perfect dinner for me after a long night of studying. I would definitely order from here again!',
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
