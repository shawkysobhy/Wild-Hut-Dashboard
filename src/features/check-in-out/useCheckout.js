import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateBooking } from '../../services/apiBookings';
import toast from 'react-hot-toast';
function useCheckout() {
	const queryClient = useQueryClient();
	const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
		mutationFn: (bookingId) =>
			updateBooking(bookingId, { status: 'checked-out' }),
		onSuccess: (data) => {
			toast.success(`cabins ${data.id} checked out ✅`);
			queryClient.invalidateQueries({ active: true });
		},
		onError: (data) => {
			toast.error(`there erro while checking out booking with  ${data.id} id `);
		},
	});
	return { checkout, isCheckingOut };
}

export default useCheckout;
