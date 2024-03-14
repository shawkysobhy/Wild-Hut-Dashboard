import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { getBooking } from '../../services/apiBookings';
import { useParams } from 'react-router-dom';

export const useBooking = () => {
	const { bookingId } = useParams();
	console.log('bookingId', bookingId);

	const {
		data: booking,
		isLoading,
		error,
	} = useQuery({
		queryKey: ['booking'],
		queryFn: () => getBooking(bookingId),
		onError: (error) => toast.error(error.message),
		retry: false,
	});
	return { isLoading, error, booking };
};
