import { format, isToday } from 'date-fns';
import { formatDistanceFromNow, formatCurrency } from '../../utils/helpers';
import Flag from '../../ui/Flag';
import {
	// HiOutlineChatBubbleBottomCenterText,
	HiOutlineCheckCircle,
	HiOutlineCurrencyDollar,
	HiOutlineHomeModern,
} from 'react-icons/hi2';
function BookingData({ booking }) {
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
		// observations,
		isPaid,
		guests: { fullName: guestName, email, country, countryFlag, nationalID },
		cabins: { name: cabinName },
	} = booking;
	return (
		<div className='overflow-hidden border rounded-lg bg-background '>
			<header className='flex flex-col px-8 py-6 space-y-6 text-2xl font-medium md:space-y-0 md:items-center md:justify-between md:px-16 md:py-8 bg-brand-light text-ctaText md:text-3xl md:flex-row'>
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
					{countryFlag && <Flag src={countryFlag} alt={`Flag of ${country}`} />}
					<p className='font-semibold text-gray-900'>
						{guestName} {numGuests > 1 ? `+ ${numGuests - 1} guests` : ''}
					</p>
					<span>&bull;</span>
					<p>{email}</p>
					<span>&bull;</span>
					<p>National ID {nationalID}</p>
				</div>
				<div className='flex items-center gap-4 py-3'>
					<HiOutlineCheckCircle className='w-8 h-8 text-brand-dark' />
					<p className='font-semibold'>Breakfast included?</p>
					{hasBreakfast ? 'Yes' : 'No'}
				</div>
				<div
					className={`flex flex-col px-8 py-6 mt-10 ${
						isPaid
							? 'text-green-700 bg-green-100'
							: 'text-yellow-700 bg-yellow-100 '
					} rounded-lg md:flex-row md:items-center md:justify-between md:px-12  md:py-7`}>
					<div className='flex flex-col py-4 space-y-3 md:space-x-4 md:flex-row md:space-y-0 smd:items-center'>
						<div className='flex '>
							<HiOutlineCurrencyDollar className='w-10 h-10' />
							<p className='font-semibold text-nowrap'>Total price</p>
						</div>
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
			<footer className='px-16 py-6 text-base text-right text-gray-500'>
				<p>Booked {format(new Date(created_at), 'EEE, MMM dd yyyy, p')}</p>
			</footer>
		</div>
	);
}

export default BookingData;
