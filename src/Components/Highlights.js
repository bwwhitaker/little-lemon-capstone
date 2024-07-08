import React from 'react';
import HighlightsCards from './HighlightsCards';
import { Link } from 'react-router-dom';

export default function Highlights() {
	const items = [
		{
			image:
				'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3648&q=80',
			title: 'Greek Salad',
			price: '$11.50',
			description: 'Crisp lettuce, peppers, olives, and feta cheese garnished with crunchy rosemary croutons.',
		},
		{
			image:
				'https://images.unsplash.com/photo-1506280754576-f6fa8a873550?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=4000&q=80',
			title: 'Bruchetta',
			price: '$7.00',
			description: 'Grilled bread smeared with garlic and seasoned with salt and olive oil.',
		},
		{
			image:
				'https://images.unsplash.com/photo-1560180474-e8563fd75bab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
			title: 'Lemon Tart',
			price: '$4.99',
			description: "Straight from grandma's recipe book, every ingredient is locally grown.",
		},
	];

	return (
		<section className='highlights-section'>
			<div className='highlights-container'>
				<div className='highlights-banner'>
					<h3>This week's specals!</h3>
					<Link to='/menu'>
						<button>Menu</button>
					</Link>
				</div>
				<div className='highlights-cards'>
					{items.map((item) => {
						return <HighlightsCards key={item.title} {...item} />;
					})}
				</div>
			</div>
		</section>
	);
}
