import React from 'react';
import { useState } from 'react';
import BookingForm from '../Components/BookingForm';
import AvailableTimes from '../Components/AvailableTimes';

export default function Reservations() {
	const [availableTimes, setAvailableTimes] = useState([]);

	const handleTimesGenerated = (newTimes) => {
		setAvailableTimes(newTimes);
	};

	return (
		<>
			<AvailableTimes onTimesGenerated={handleTimesGenerated} />
			<BookingForm availableTimes={availableTimes} />
		</>
	);
}
