import { useQuery } from '@tanstack/react-query';
import { getBookings } from '../../services/apiBookings';
import { useSearchParams } from 'react-router-dom';

function useBookings() {
	const [searchParams] = useSearchParams();
	const filterValue = searchParams.get('status');
	const filter =
		!filterValue || filterValue === 'all'
			? null
			: {
					field: 'status',
					value: filterValue,
			  };
	const sortValue = searchParams.get('sortBy') || 'startDate-desc';
	const [sortFiled, sortDirection] = sortValue.split('-');
	const sortBy = { sortFiled, sortDirection };
	const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));

	console.log(page);
	const {
		data: { data: bookingData, count } = {},
		error: bookingError,
		isLoading: isBookingLoading,
	} = useQuery({
		queryKey: ['bookings', filter, sortBy, page],
		queryFn: () => getBookings({ filter, sortBy, page }),
	});

	/**
	 * 
	 * 
	 * 
	 * 
	 *  FEAT : PREFICHING USEING REACT QUERY "NEXT"
	 * 



	 */
	return { bookingData, bookingError, isBookingLoading, count };
}

export default useBookings;
