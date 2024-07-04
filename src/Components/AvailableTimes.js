import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

// Helper function to generate a random time string at quarter-hour intervals
const generateRandomTime = () => {
	const availableHours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
	const hours = availableHours[Math.floor(Math.random() * availableHours.length)];
	// Select a random value from the quarter-hour intervals
	const quarterHours = [0, 15, 30, 45];
	const minutes = quarterHours[Math.floor(Math.random() * quarterHours.length)];
	return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
};

const AvailableTimes = ({ onTimesGenerated }) => {
	// Use a ref to track the initial mount
	const hasGeneratedTimes = useRef(false);

	useEffect(() => {
		if (!hasGeneratedTimes.current) {
			const generateTimes = () => {
				const newTimes = [];
				const numberOfOptions = [3, 4, 5, 6, 7, 8, 9, 10];
				const availableOptions = numberOfOptions[Math.floor(Math.random() * numberOfOptions.length)];
				for (let i = 0; i < availableOptions; i++) {
					newTimes.push(generateRandomTime());
				}
				onTimesGenerated(newTimes.sort());
			};

			generateTimes();
			hasGeneratedTimes.current = true; // Set the ref to true after generating times
		}
	}, [onTimesGenerated]);

	return <div></div>;
};

AvailableTimes.propTypes = {
	onTimesGenerated: PropTypes.func.isRequired,
};

export default AvailableTimes;
