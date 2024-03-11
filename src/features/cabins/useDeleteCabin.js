import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteCabins } from '../../services/apiCabin';
import toast from 'react-hot-toast';

function useDeleteCabin() {
	const queryClient = useQueryClient();

	const { mutate: deleteCabin, isLoading: isDeleting } = useMutation({
		mutationFn: (id) => deleteCabins(id),
		onSuccess: () => {
			queryClient.invalidateQueries('[cabins]');
			toast.success('cabin deleted');
		},
		onError: (error) => toast.error(error.message),
	});

	return { deleteCabin, isDeleting };
}

export default useDeleteCabin;
