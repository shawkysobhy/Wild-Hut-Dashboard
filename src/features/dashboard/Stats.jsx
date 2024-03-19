import {
	HiOutlineBanknotes,
	HiOutlineBriefcase,
	HiOutlineCalendarDays,
	HiOutlineChartBar,
} from 'react-icons/hi2';
import Stat from './Stat';
import { formatCurrency } from '../../utils/helpers';
function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
	const numBookings = bookings?.length;
	const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);
	const checkins = confirmedStays.length;
	const occupation =
		confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
		(numDays * cabinCount);

	return (
		<div className='grid md:grid-cols-3 xl:grid-cols-4 wide:grid-cols-2 gird-cols-1 gap-x-4 gap-y-8 '>
			<Stat
				title='Bookings'
				color='blue'
				icon={<HiOutlineBriefcase className='w-12 h-12' />}
				value={numBookings}
			/>
			<Stat
				title='Sales'
				color='green'
				icon={<HiOutlineBanknotes className='w-12 h-12' />}
				value={formatCurrency(sales)}
			/>
			<Stat
				title='Check Ins'
				color='indigo'
				icon={<HiOutlineCalendarDays className='w-12 h-12' />}
				value={checkins}
			/>
			<Stat
				title='Occupancy rate'
				color='yellow'
				icon={<HiOutlineChartBar className='w-12 h-12' />}
				value={Math.round(occupation * 100) + '%'}
			/>
		</div>
	);
}

export default Stats;
