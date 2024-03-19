import Spinner from '../../ui/Spinner';
import BookingData from '../bookings/BookingData';
import { useBooking } from '../bookings/useBooking';
import StyledButton from '../../ui/StyledButton';
import { formatCurrency } from '../../utils/helpers';
import StyledTitle from '../../ui/StyledTitle';
import Tag from '../../ui/Tag';
import { useMoveBack } from '../../hooks/useMoveBack';
import { useSettings } from '../settings/useSettings';
import { useEffect, useState } from 'react';
import useCheckin from './useCheckin';
import Checkbox from '../../ui/CheckBox';
import useCheckout from './useCheckout';
function CheckinBooking() {
	const [confirmPaid, setConfirmPaid] = useState(false);
	const { checkin, isChecking } = useCheckin();
	const { checkout, isCheckingOut } = useCheckout();
	const [addBreakfast, setAddBreakfast] = useState(false);
	const { isLoading, booking } = useBooking();
	const { settings, isLoading: isLoadingSettings } = useSettings();
	const moveBack = useMoveBack();
	useEffect(() => setConfirmPaid(booking?.isPaid ?? false), [booking]);
	if (isLoading || isLoadingSettings) return <Spinner />;
	const { id, status } = booking;
	const {
		id: bookingId,
		guests,
		totalPrice,
		numGuests,
		hasBreakfast,
		numNights,
	} = booking;

	const optionalBreakfastPrice =
		settings.breakfastPrice * numNights * numGuests;
	function handleCheckin() {
		if (!confirmPaid) return;
		if (addBreakfast) {
			checkin({
				bookingId,
				breakfast: {
					hasBreakfast: true,
					extraPrice: optionalBreakfastPrice,
					totalPrice: totalPrice + optionalBreakfastPrice,
				},
			});
		} else {
			checkin({ bookingId, breakfast: {} });
		}
	}
	return (
		<div className='flex flex-col max-w-[1200px] mx-auto space-y-12'>
			<div className='flex items-center justify-between'>
				<div className='flex flex-col px-4 space-y-4 md:items-center md:space-y-0 md:space-x-6 md:flex-row '>
					<StyledTitle>Checkin Booking #{id} </StyledTitle>
					<Tag type={'sky'}>{status.replace('-', ' ')}</Tag>
				</div>
				<button
					className='hidden text-3xl text-indigo-700 font-semidbolds md:block'
					onClick={moveBack}>
					&larr; Back{' '}
				</button>
			</div>
			<BookingData booking={booking} />
			{!hasBreakfast && (
				<div className='px-16 py-10 border rounded-md border-border-light text-text bg-background'>
					<Checkbox
						id='breakfast'
						checked={addBreakfast}
						onChange={() => {
							setAddBreakfast((prev) => !prev);
							setConfirmPaid(false);
						}}>
						Want to add breakfast for {formatCurrency(optionalBreakfastPrice)}
					</Checkbox>
				</div>
			)}

			<div className='px-16 py-10 border rounded-md text-text bg-background border-border-light'>
				<Checkbox
					id='confirm'
					checked={confirmPaid}
					disabled={confirmPaid}
					onChange={() => setConfirmPaid((confirm) => !confirm)}>
					I confirm that
					{guests?.fullName} has paid the total amount of{' '}
					{!addBreakfast
						? formatCurrency(totalPrice)
						: `${formatCurrency(
								totalPrice + optionalBreakfastPrice
						  )} (${formatCurrency(totalPrice)} + ${formatCurrency(
								optionalBreakfastPrice
						  )})`}
				</Checkbox>
			</div>
			<div className='flex items-center ml-auto space-x-4'>
				{status == 'unconfirmed' && (
					<StyledButton
						color='indigo'
						onClick={handleCheckin}
						disabled={!confirmPaid || isChecking}>
						Check in booking #{id}
					</StyledButton>
				)}

				{status == 'checked-in' && (
					<StyledButton
						color='indigo'
						onClick={() => checkout(bookingId)}
						disabled={!confirmPaid || isCheckingOut}>
						Check out booking #{id}
					</StyledButton>
				)}
				<StyledButton color='white' onClick={moveBack}>
					Back
				</StyledButton>
			</div>
		</div>
	);
}

export default CheckinBooking;
