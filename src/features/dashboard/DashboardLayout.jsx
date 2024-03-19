import Spinner from '../../ui/Spinner';
import { useCabins } from '../cabins/useCabins';
import SalesChart from './SalesCharts';
import Stats from './Stats';
import { useRecentBookings } from './useRecentBookings';
import { useRecentStays } from './useRecentStays';
function DashboardLayout() {
	const { bookings, isLoading: bookingsLoading } = useRecentBookings();
	const { isLoading: staysLoading, confirmedStays, numDays } = useRecentStays();
	const { cabins, isLoading: cabinsLoading } = useCabins();
	if (bookingsLoading || staysLoading || cabinsLoading) return <Spinner />;
	return (
		<div className='flex flex-col space-y-8'>
			<Stats
				bookings={bookings}
				confirmedStays={confirmedStays}
				numDays={numDays}
				cabinCount={cabins?.length}
			/>
			<SalesChart bookings={bookings} numDays={numDays} />
		</div>
	);
}

export default DashboardLayout;
