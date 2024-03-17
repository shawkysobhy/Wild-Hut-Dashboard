import { useForm } from 'react-hook-form';
import StyledButton from '../../ui/StyledButton';
import MiniSpinner from '../../ui/MiniSpinner';
import useLogin from './useLogin';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
const schema = z.object({
	email: z.string().email(),
	password: z.string().min(6),
});
function LoginForm() {
	const { login, isLoginLoading } = useLogin();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: { email: 'shawkysobhy@xyz.com', password: '12345678' },
		resolver: zodResolver(schema),
	});
	const onSubmit = (data) => {
		console.log(data.email, data.password);
		login({ email: data.email, password: data.password });
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='space-y-3'>
			<div className='flex flex-col space-y-2 py-[1.2rem]'>
				<label
					htmlFor='email'
					{...register('email')}
					className='block font-medium '>
					Email
				</label>
				<div className='flex flex-col space-y-2'>
					<input
						type='email'
						{...register('email')}
						id='email'
						autoComplete='email'
						className='px-4 py-2 border border-gray-300 rounded-md shadow-sm md:py-3 outline-indigo-500'
					/>
					{errors.email && (
						<span className='ml-2 text-[12px] text-red-700'>
							{errors.email.message}
						</span>
					)}
				</div>
			</div>
			<div className='flex flex-col space-y-4 py-[1.2rem]'>
				<div className='flex flex-col space-y-2'>
					<label htmlFor='password' className='block font-medium '>
						Password
					</label>
					<input
						{...register('password')}
						type='password'
						id='password'
						autoComplete='current-password'
						className='px-4 py-2 border border-gray-300 rounded-md shadow-sm md:py-3 outline-indigo-500'
					/>
					{errors.email && (
						<span className='ml-2 text-[12px] text-red-700'>
							{errors.password.message}
						</span>
					)}
				</div>
			</div>
			<StyledButton color='indigo' className='w-full text-[1.5rem]'>
				{isLoginLoading ? <MiniSpinner /> : 'log in'}
			</StyledButton>
		</form>
	);
}

export default LoginForm;
