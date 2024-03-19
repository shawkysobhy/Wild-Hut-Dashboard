import { useForm } from 'react-hook-form';
import StyledButton from '../../ui/StyledButton';
import FormGroup from '../../ui/FormGroup';
import StyledLabel from '../../ui/StyledLabel';
import { useSignup } from './useSignup';
import SmallErrorMessage from '../../ui/SmallErrorMessage';

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
			className='px-16 py-10 overflow-hidden border bg-background border-border-dark text-5'>
			<FormGroup>
				<StyledLabel>Full name</StyledLabel>
				<input
					{...register('fullName', { required: 'This field is required' })}
					type='text'
					disabled={isLoading}
					className='px-5 py-3 border rounded-md shadow-sm border-border-dark focus:outline-brand-light text-text bg-background'
				/>

				{errors?.fullName && (
					<SmallErrorMessage message={errors.fullName?.message} />
				)}
			</FormGroup>
			<FormGroup>
				<StyledLabel>Email address</StyledLabel>
				<input
					type='email'
					id='email'
					autoComplete='email'
					className='px-5 py-3 border rounded-md shadow-sm border-border-dark focus:outline-brand-light text-text bg-background'
					disabled={isLoading}
					{...register('email', {
						required: 'This field is required',
						pattern: {
							value: /\S+@\S+\.\S+/,
							message: 'Please provide a valid email address',
						},
					})}
				/>
				{errors.email && <SmallErrorMessage message={errors?.email?.message} />}
			</FormGroup>
			<FormGroup>
				<StyledLabel>
					Password
					<span className='text-red-500 text-md'>(8 characters)</span>
				</StyledLabel>
				<input
					className='px-5 py-3 border rounded-md shadow-sm border-border-dark text-text bg-background focus:outline-brand-light'
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
					<SmallErrorMessage message={errors?.password?.message} />
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
					className='px-5 py-3 border rounded-md shadow-sm text-text bg-background border-border-dark focus:outline-brand-light'
					type='password'
					autoComplete='new-password'
				/>
				{errors.confirmPassword && (
					<SmallErrorMessage message={errors?.confirmPassword?.message} />
				)}
			</FormGroup>
			<div className='flex items-center justify-end py-5 gap-x-10'>
				<StyledButton color='white' type='reset' onClick={reset}>
					Cancel
				</StyledButton>
				<StyledButton color='indigo'>Add new user</StyledButton>
			</div>
		</form>
	);
}

export default SignupForm;
