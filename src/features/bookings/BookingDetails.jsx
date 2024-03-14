import StyledTitle from '../../ui/StyledTitle';
import { format, isToday } from 'date-fns';
import { formatDistanceFromNow, formatCurrency } from '../../utils/helpers';

import {
	HiOutlineChatBubbleBottomCenterText,
	HiOutlineCheckCircle,
	HiOutlineCurrencyDollar,
	HiOutlineHomeModern,
} from 'react-icons/hi2';

import { useMoveBack } from '../../hooks/useMoveBack';
import Tag from '../../ui/Tag';
import { useBooking } from './useBooking';
import Spinner from '../../ui/Spinner';
import StyledButton from '../../ui/StyledButton';
import Flag from '../../ui/Flag';
const statusTagName = {
	unconfirmed: 'sky',
	'checked-in': 'green',
	'checked-out': 'gray',
};

function BookingDetails() {
	const moveBack = useMoveBack();
	const { isLoading, booking } = useBooking();
	if (isLoading) return <Spinner />;
	const { id, status } = booking;
	const {
		created_at,
		startDate,
		endDate,
		numNights,
		numGuests,
		cabinPrice,
		extraPrice,
		totalPrice,
		hasBreakfast,
		observations,
		isPaid,
		guests: { fullName: guestName, email, country, countryFlag, nationalID },
		cabins: { name: cabinName },
	} = booking;
	console.log(booking);
	return (
		<div className='flex flex-col max-w-[1200px] mx-auto space-y-12'>
			<div className='flex items-center justify-between'>
				<div className='flex flex-col px-4 space-y-4 md:items-center md:space-y-0 md:space-x-6 md:flex-row '>
					<StyledTitle>Booking #{id}</StyledTitle>
					<Tag type={statusTagName[status]}>{status.replace('-', ' ')}</Tag>
				</div>
				<button
					className='hidden text-3xl text-indigo-700 font-semidbolds md:block'
					onClick={moveBack}>
					&larr; Back{' '}
				</button>
			</div>
			<div className='overflow-hidden bg-white border rounded-lg '>
				<header className='flex flex-col  space-y-6 md:space-y-0 px-8 py-6   md:items-center md:justify-between  md:px-16 md:py-8 font-medium bg-indigo-500 text-[#e0e7ff] text-2xl md:text-3xl md:flex-row'>
					<div className='flex items-center space-x-4 '>
						<HiOutlineHomeModern className='flex-shrink-0 w-12 h-12' />
						<p>
							{numNights} nights in Cabin <span>{cabinName}</span>
						</p>
					</div>
					<p>
						{format(new Date(startDate), 'EEE, MMM dd yyyy')} (
						{isToday(new Date(startDate))
							? 'Today'
							: formatDistanceFromNow(startDate)}
						) &mdash; {format(new Date(endDate), 'EEE, MMM dd yyyy')}
					</p>
				</header>
				<section className='px-8 py-6 md:px-16 md:pt-12 md:pb-5'>
					<div className='flex flex-col space-y-4 text-gray-500 md:space-y-0 md:space-x-5 md:flex-row md:items-center mb-7'>
						{countryFlag && (
							<Flag src={countryFlag} alt={`Flag of ${country}`} />
						)}
						<p className='font-semibold text-gray-900'>
							{guestName} {numGuests > 1 ? `+ ${numGuests - 1} guests` : ''}
						</p>
						<span>&bull;</span>
						<p>{email}</p>
						<span>&bull;</span>
						<p>National ID {nationalID}</p>
					</div>
					<div className='flex items-center gap-4 py-3'>
						<HiOutlineCheckCircle className='w-8 h-8 text-indigo-600' />
						<p className='font-semibold'>Breakfast included?</p>
						{hasBreakfast ? 'Yes' : 'No'}
					</div>
					<div className='flex flex-col px-8 py-6 mt-10 text-yellow-700 bg-yellow-100 rounded-lg md:flex-row md:items-center md:justify-between md:px-12 flex-ocl md:py-7'>
						<div className='flex items-center py-4 space-x-4'>
							<HiOutlineCurrencyDollar className='w-10 h-10' />
							<p className='font-semibold'>Total price</p>
							<p>
								{formatCurrency(totalPrice)}
								{hasBreakfast &&
									` (${formatCurrency(cabinPrice)} cabin + ${formatCurrency(
										extraPrice
									)} breakfast)`}
							</p>
						</div>
						<p className='font-semibold text-[14px]'>
							<p>{isPaid ? 'Paid' : 'Will pay at property'}</p>
						</p>
					</div>
				</section>
				<footer className='px-16 py-6 text-[16px] text-right text-gray-500'>
					<p>Booked {format(new Date(created_at), 'EEE, MMM dd yyyy, p')}</p>
				</footer>
			</div>
			<div className='flex flex-wrap ml-auto space-x-3 md:space-x-5'>
				<StyledButton color='indigo'>Check in</StyledButton>
				<StyledButton color='red'>Delete booking</StyledButton>
				<StyledButton color='white'>Back</StyledButton>
			</div>
		</div>
	);
}

export default BookingDetails;
