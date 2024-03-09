import { useNavigate } from 'react-router-dom';
import { LuMoreVertical } from 'react-icons/lu';
import { formatDistanceFromNow } from '../../utils/helpers';

import { format, isToday } from 'date-fns';
import { formatCurrency } from '../../utils/helpers';
import Tag from '../../ui/Tag';
function BookingRow({
	booking: {
		id: bookingId,
		created_at,
		startDate,
		endDate,
		nightsNum,
		guestNum,
		totalPrice,
		status,
		guests: { fullName: guestName, email },
		cabins: { name: cabinName },
	},
}) {
	const navigate = useNavigate();
	const statusToTagName = {
		'unconfirmed': 'blue',
		'checked-in': 'green',
		'checked-out': 'gray',
	};
	const bookingNavigateHandler = () => {
		navigate(`/bookings/${bookingId}`);
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
					&rarr; {nightsNum} night stay
				</span>
				<span className='text-[12px]'>
					{format(new Date(startDate), 'MMM dd yyyy')} &mdash;{' '}
					{format(new Date(endDate), 'MMM dd yyyy')}
				</span>
			</td>
			<td className=''>
				<Tag type={statusToTagName[status]}>{status.replace('-', ' ')}</Tag>
			</td>
			<td className='font-medium font-sono'>{formatCurrency(totalPrice)}</td>
			<td>
				<LuMoreVertical width={'100%'} />
			</td>
		</tr>
	);
}

export default BookingRow;
