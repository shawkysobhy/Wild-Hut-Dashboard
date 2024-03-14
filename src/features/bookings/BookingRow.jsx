import { useNavigate } from 'react-router-dom';
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
		cabins: { name: cabinName },
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
			className=' grid  py-5 px-10 grid-cols-[.6fr_2fr_2.4fr_1.4fr_1fr_3.2rem]    gap-x-8 border-b border-gray-100 justify-center items-center text-left'>
			<td className='text-2xl font-semibold font-sono'>{cabinName}</td>
			<td className='flex flex-col'>
				<span className='font-semibold'>{guestName}</span>
				<span>{email}</span>
			</td>
			<td className='flex flex-col text-nowrap'>
				<span className='font-semibold '>
					{isToday(new Date(startDate))
						? 'Today'
						: formatDistanceFromNow(startDate)}{' '}
					&rarr; {numNights} night stay
				</span>
				<span className='text-[12px]'>
					{format(new Date(startDate), 'MMM dd yyyy')} &mdash;{' '}
					{format(new Date(endDate), 'MMM dd yyyy')}
				</span>
			</td>
			<td className=''>
				<Tag type={statusTagName[status]}>{status.replace('-', ' ')}</Tag>
			</td>
			<td className='font-medium font-sono'>{formatCurrency(totalPrice)}</td>
			<td>
				<BookingActions bookingId={bookingId} status={status} />
			</td>
		</tr>
	);
}

export default BookingRow;
