import BookingRow from './BookingRow';
import useBookings from './useBookings';
function BookingTable() {
	const { bookingData, bookingError, isBookingLoading, count } = useBookings();

	if (isBookingLoading) return <h1>isloading</h1>;
	console.log(bookingData);
	let sortedBooking =bookingData;
	return (
		<div className='overflow-x-scroll  max-w-screen'>
			<div className='flex flex-col space-y-9'>
				<table className='border border-gray-200 rounded-md '>
					<thead className='px-10 py-6 font-medium tracking-wide text-gray-600 border-b border-gray-100 bg-gray-50'>
						<tr className='  py-5 px-10 grid text-left  grid-cols-[.6fr_2fr_2.4fr_1.4fr_1fr_3.2rem] gap-x-8 items-center	'>
							<th>CABIN</th>
							<th>GUEST</th>
							<th>DATES</th>
							<th>STATUS</th>
							<th>AMOUNT</th>
							<th>AC</th>
						</tr>
					</thead>
					<tbody>
						{sortedBooking.map((booking) => (
							<BookingRow booking={booking} key={booking.id} />
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default BookingTable;
