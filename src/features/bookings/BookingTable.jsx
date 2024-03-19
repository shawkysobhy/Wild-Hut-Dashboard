import BookingRow from './BookingRow';
import useBookings from './useBookings';
import Pagination from '../../ui/Pagination';
import Spinner from '../../ui/Spinner';
function BookingTable() {
	const { bookingData, isBookingLoading, count } = useBookings();

	if (isBookingLoading) return <Spinner />;
	console.log(bookingData);
	let sortedBooking = bookingData;
	return (
		<div className='overflow-x-auto max-w-screen'>
			<div className='flex flex-col'>
				<table className='border rounded-md border-border-dark '>
					<thead className='px-10 py-6 text-sm tracking-wide border-b bg-containerBackground text-text border-border-light'>
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
						{sortedBooking?.map((booking) => (
							<BookingRow booking={booking} key={booking.id} />
						))}
						<tr>
							<td>
								<div className='p-8 border bg-background border-border-dark rounded-b-md '>
									<Pagination count={count} />
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default BookingTable;
