import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getBookings } from '../../services/apiBookings';
import { useSearchParams } from 'react-router-dom';

function useBookings() {
	const queryClient = useQueryClient();
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
	// const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));

	const {
		data: { data: bookingData, count } = {},
		error: bookingError,
		isLoading: isBookingLoading,
	} = useQuery({
		queryKey: ['bookings', filter, sortBy],
		queryFn: () => getBookings({ filter, sortBy }),
	});

	// const pageCount = Math.ceil(count / 10);
	// if (pageCount > page) {
	// 	queryClient.prefetchQuery({
	// 		queryKey: ['bookings', filter, sortBy, page + 1],
	// 		queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
	// 	});
	// }
	// if (page > 1) {
	// 	queryClient.prefetchQuery({
	// 		queryKey: ['bookings', filter, sortBy, page - 1],
	// 		queryFn: () => getBookings({ filter, sortBy, page: page - 1 }),
	// 	});
	// }
	return { bookingData, bookingError, isBookingLoading, count };
}

export default useBookings;
