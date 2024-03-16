import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
function useLogin() {
	const queryClient = useQueryClient();
	const navigate = useNavigate();
	const { mutate: login, isLoading: isLoginLoading } = useMutation({
		mutationFn: ({ email, password }) => loginApi({ email, password }),
		onSuccess: (user) => {
			toast.success('login succefully');
			navigate('/dashboard');
			queryClient.setQueryData(['user'], user.user);
			navigate('/dashboard', { replace: true });
		},
		onError: () => {
			toast.error('passwrod or email are inValid');
		},
	});

	return { login, isLoginLoading };
}

export default useLogin;
