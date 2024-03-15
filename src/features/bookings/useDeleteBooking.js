import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteBooking as deleteBookingApi } from '../../services/apiBookings';
import toast from 'react-hot-toast';

const useDeleteBooking = () => {
	const queryClient = useQueryClient();
	const { mutate: deleteBooking, isLoading: isDeleteing } = useMutation({
		mutationFn: deleteBookingApi,
		onSuccess: () => {
			toast.success(`booking  successfully deleted`);
			queryClient.invalidateQueries({ queryKey: ['bookings'] });
		},
		onError: (err) => toast.error(err.message),
	});

	return { deleteBooking, isDeleteing };
};
export default useDeleteBooking;
