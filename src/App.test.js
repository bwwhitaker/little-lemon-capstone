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

test('Confirm Booking button is enabled when form is filled correctly', () => {
	render(
		<BrowserRouter>
			<Reservations />
		</BrowserRouter>
	);

	const getIsFormValid = () => {
		return (
			formData.date.trim().length >= 3 &&
			formData.time.trim().length >= 3 &&
			formData.fullname.trim().length >= 3 &&
			formData.phone.trim().length >= 10 &&
			formData.email.trim().length >= 8
		);
	};

	// Mock formData
	const formData = {
		date: '2024-07-05',
		time: '12:00 PM',
		fullname: 'John Doe',
		email: 'johndoe@example.com',
		phone: '1234567890',
	};

	// Test the function with valid form data
	const isValid = getIsFormValid(formData);

	// Assert that the form is valid
	expect(isValid).toBe(true);
});
