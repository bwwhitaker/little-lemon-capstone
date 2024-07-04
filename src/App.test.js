import { render, screen, waitFor } from '@testing-library/react';
import Reservations from './Pages/Reservations';
import { BrowserRouter } from 'react-router-dom';
import { fireEvent } from '@testing-library/react';

test('Renders the BookingForm heading', () => {
	render(
		<BrowserRouter>
			<Reservations />
		</BrowserRouter>
	);
	const headingElement = screen.getByText('Reserve a Table');
	expect(headingElement).toBeInTheDocument();

	const reserveButton = screen.getByText('Confirm Booking');
	fireEvent.click(reserveButton);

	const headingElementNew = screen.getByText('Date');
	expect(headingElementNew).toBeInTheDocument();
});

test('Initialize/Update Times', async () => {
	render(
		<BrowserRouter>
			<Reservations />
		</BrowserRouter>
	);
	const selectElement = screen.getByLabelText('Time*');
	expect(selectElement).toBeInTheDocument();

	await waitFor(() => {
		const options = screen.getAllByRole('option');
		expect(options.length).toBeGreaterThan(1);
	});
});

test('Confirm Button is intially disabled', () => {
	render(
		<BrowserRouter>
			<Reservations />
		</BrowserRouter>
	);
	const confirmButton = screen.getByText('Confirm Booking');
	expect(confirmButton).toBeDisabled();
});
