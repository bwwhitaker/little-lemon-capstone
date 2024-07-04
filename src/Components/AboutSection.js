import React from 'react';
import marioAndAdrian1 from '../icons_assets/Mario and Adrian A.jpg';
import marioAndAdrian2 from '../icons_assets/Mario and Adrian b.jpg';

export default function AboutSection() {
	return (
		<section className='about-us' id='about'>
			<div className='about-us-container'>
				<div className='about-us-detail'>
					<h2>Our Story</h2>
					<p>
						Little Lemon was founded by two Italian brothers, Mario and Adrian. They moved to Chicago and pursued their
						dream of bringing quality food to the Windy City.
						<br />
						<br />
						Mario uses his family recipes and experience as a Chef in Italy to create an authentic menu. Adrian, our
						marketing genuius, started the effort to expand the classic Italian menu by incorporating additional
						Mediterranean cuisines.
					</p>
				</div>
				<div className='about-us-img'>
					<img src={marioAndAdrian1} alt='Mario and Adrian' />
					<img src={marioAndAdrian2} alt='Mario and Adrian' />
				</div>
			</div>
		</section>
	);
}
