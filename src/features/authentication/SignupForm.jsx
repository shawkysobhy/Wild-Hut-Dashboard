import { useForm } from 'react-hook-form';
import StyledButton from '../../ui/StyledButton';
import BrandButton from '../../ui/BrandButton';
import FormGroup from '../../ui/FormGroup';
import StyledLabel from '../../ui/StyledLabel';
import { useSignup } from './useSignup';

function SignupForm() {
	const { signup, isLoading } = useSignup();
	const {
		handleSubmit,
		register,
		getValues,
		reset,
		formState: { errors },
	} = useForm();
	const onSubmit = ({ fullName, email, password }) => {
		signup(
			{ fullName, email, password },
			{
				onSettled: () => {
					reset();
				},
			}
		);
	};
	console.log(errors);
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='px-16 py-10 overflow-hidden bg-white border border-border-md text-5'>
			<FormGroup>
				<StyledLabel>Full name</StyledLabel>
				<input
					{...register('fullName', { required: 'This field is required' })}
					placeholder='full name'
					type='text'
					id='fullName'
					disabled={isLoading}
					className='px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-indigo-500'
				/>
				{errors.fullName && (
					<span className='ml-2 text-[12px] text-red-700'>
						{errors.email.fullName}
					</span>
				)}
			</FormGroup>
			<FormGroup>
				<StyledLabel>Email address</StyledLabel>
				<input
					type='email'
					id='email'
					autoComplete='email'
					className='px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-indigo-500'
					disabled={isLoading}
					{...register('email', {
						required: 'This field is required',
						pattern: {
							value: /\S+@\S+\.\S+/,
							message: 'Please provide a valid email address',
						},
					})}
				/>
				{errors.email && (
					<span className='ml-2 text-[12px] text-red-700'>
						{errors.email.message}
					</span>
				)}{' '}
			</FormGroup>
			<FormGroup>
				<StyledLabel>
					Password
					<span className='text-red-500 text-md'>(8 characters)</span>
				</StyledLabel>
				<input
					className='px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-indigo-500'
					type='password'
					id='password'
					autoComplete='new-password'
					disabled={isLoading}
					{...register('password', {
						required: 'This field is required',
						minLength: {
							value: 8,
							message: 'Password needs a minimum of 8 characters',
						},
					})}
				/>
				{errors.password && (
					<span className='ml-2 text-[12px] text-red-700'>
						{errors.password.message}
					</span>
				)}
			</FormGroup>
			<FormGroup>
				<StyledLabel className='font-medium'>Repeat password</StyledLabel>
				<input
					id='confirmPassword'
					{...register('confirmPassword', {
						required: 'This field is required',
						validate: (value) =>
							value === getValues().password || 'Passwords need to match',
					})}
					className='px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-indigo-500'
					type='password'
					autoComplete='new-password'
				/>
				{errors.confirmPassword && (
					<span className='ml-2 text-[12px] text-red-700'>
						{errors.confirmPassword.message}
					</span>
				)}
			</FormGroup>
			<div className='flex items-center justify-end py-5 border-b border-gray-100 gap-x-10'>
				<StyledButton color='white' type='reset'>
					Cancel
				</StyledButton>
				<StyledButton color='indigo'>Add new user</StyledButton>
			</div>
		</form>
	);
}

export default SignupForm;
