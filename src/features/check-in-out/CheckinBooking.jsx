import Spinner from '../../ui/Spinner';
import BookingData from '../bookings/BookingData';
import { useBooking } from '../bookings/useBooking';
import StyledTitle from '../../ui/StyledTitle';
import Tag from '../../ui/Tag';
import { useMoveBack } from '../../hooks/useMoveBack';
function CheckinBooking() {
	const moveBack = useMoveBack();
	const { isLoading, booking } = useBooking();
	if (isLoading) return <Spinner />;
	const { id, status } = booking;
	console.log(booking);

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
		</div>
	);
}

export default CheckinBooking;
