import { formatDistanceFromNow } from '../../utils/helpers';
import { format, isToday } from 'date-fns';
import { formatCurrency } from '../../utils/helpers';
import Tag from '../../ui/Tag';
import BookingActions from './BookingActions';
function BookingRow({
	booking: {
		id: bookingId,
		created_at,
		startDate,
		endDate,
		numNights,
		numGuests,
		totalPrice,
		status,
		guests: { fullName: guestName, email },
		cabins: { name },
	},
}) {
	const statusTagName = {
		unconfirmed: 'sky',
		'checked-in': 'green',
		'checked-out': 'gray',
	};

	return (
		<tr
			key={bookingId}
			className=' grid  py-5 px-10 grid-cols-[.6fr_2fr_2.4fr_1.4fr_1fr_3.2rem] bg-background    gap-x-8 border-b border-border justify-center items-center text-left'>
			<td className='text-base font-semibold text-text font-sono'>{name}</td>
			<td className='flex flex-col'>
				<span className='text-sm font-medium dark:text-gray-100'>
					{guestName}
				</span>
				<span className='text-xs text-text'>{email}</span>
			</td>
			<td className='flex flex-col text-nowrap text-text'>
				<span className='text-sm font-medium'>
					{isToday(new Date(startDate))
						? 'Today'
						: formatDistanceFromNow(startDate)}{' '}
					&rarr; {numNights} night stay
				</span>
				<span className='text-xs text-gray-500'>
					{format(new Date(startDate), 'MMM dd yyyy')} &mdash;{' '}
					{format(new Date(endDate), 'MMM dd yyyy')}
				</span>
			</td>
			<td className=''>
				<Tag type={statusTagName[status]}>{status.replace('-', ' ')}</Tag>
			</td>
			<td className='font-medium text-green-700 dark:text-gray-200 font-sono'>
				{formatCurrency(totalPrice)}
			</td>
			<td>
				<BookingActions bookingId={bookingId} status={status} />
			</td>
		</tr>
	);
}

export default BookingRow;
