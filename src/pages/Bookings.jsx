import StyledTitle from '../ui/StyledTitle';
import BookingTableOperations from '../features/bookings/BookingTableOperations';
import BookingTable from '../features/bookings/BookingTable';
function Bookings() {
	return (
		<div className=' section-wrapper'>
			<div className='flex flex-col flex-wrap items-start justify-between space-y-4 md:px-8 md:flex-row md:space-y-0'>
				<StyledTitle>All bookings</StyledTitle>
				<BookingTableOperations />
			</div>
			<BookingTable />
		</div>
	);
}

export default Bookings;
