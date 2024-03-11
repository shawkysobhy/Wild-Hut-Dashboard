import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { createUpdateCabin } from '../../services/apiCabin';

function useEditCabin() {
	const queryClient = useQueryClient();
	const {
		mutate: editCabin,
		isLoading: isEditing,
		error: editingError,
	} = useMutation({
		mutationFn: ({ cabin, id }) => createUpdateCabin(cabin, id),
		onSuccess: () => {
			toast.success(` Cabin edited ✅`);
			queryClient.invalidateQueries('cabins');
		},
		onError: () => {
			toast.error(editingError, 'edit fail');
			throw new Error('edit fail');
		},
	});

	return { editCabin, isEditing, editingError };
}

export default useEditCabin;
