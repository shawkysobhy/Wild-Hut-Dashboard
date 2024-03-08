import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createUpdateCabin } from '../../services/apiCabin';
import toast from 'react-hot-toast';

function useCreateCabin() {
	const queryClient = useQueryClient();
	const {
		mutate: createCabinMutate,
		isLoading: isCreating,
		error: creatingError,
	} = useMutation({
		mutationFn: createUpdateCabin,
		onSuccess: () => {
			toast.success(`new Cabin with  add ✅`);
			queryClient.invalidateQueries('cabins');
		},
		onError: () => {
			toast.error(creatingError);
		},
	});
	return { isCreating, createCabinMutate, creatingError };
}

export default useCreateCabin;
