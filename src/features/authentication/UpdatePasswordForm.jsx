import { useForm } from 'react-hook-form';
import FormGroup from '../../ui/FormGroup';
import StyledLabel from '../../ui/StyledLabel';
import StyledButton from '../../ui/StyledButton';
import { useUpdateUser } from './useUpdateUser';

function UpdatePasswordForm() {
	const { register, handleSubmit, formState, getValues, reset } = useForm();
	const { errors } = formState;

	const { updateUser, isUpdating } = useUpdateUser();

	function onSubmit({ password }) {
		updateUser({ password }, { onSuccess: reset });
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='px-[40px] py-[24px] overflow-hidden bg-white border border-gray-100 rounded-md '>
			<FormGroup>
				<StyledLabel>Password</StyledLabel>
				<input
					type='password'
					id='password'
					autoComplete='current-password'
					disabled={isUpdating}
					{...register('password', {
						required: 'This field is required',
						minLength: {
							value: 8,
							message: 'Password needs a minimum of 8 characters',
						},
					})}
					className='px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-indigo-500'
				/>
				{errors.password && (
					<span className='text-red-600'>{errors.password.message}</span>
				)}
			</FormGroup>
			<FormGroup>
				<StyledLabel>Confirm password</StyledLabel>
				<input
					type='password'
					autoComplete='new-password'
					id='passwordConfirm'
					disabled={isUpdating}
					{...register('passwordConfirm', {
						required: 'This field is required',
						validate: (value) =>
							getValues().password === value || 'Passwords need to match',
					})}
					className='px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-indigo-500'
				/>
				{errors.password && (
					<span className='text-red-600'>{errors.passwordConfirm.message}</span>
				)}
			</FormGroup>
			<div className='flex items-center justify-end space-x-4'>
				<StyledButton type='reset' color='white' onClick={reset}>
					Cancel
				</StyledButton>
				<StyledButton type='submit' color='indigo' className={'my-4'}>
					{'Update password'}
				</StyledButton>
			</div>{' '}
		</form>
	);
}

export default UpdatePasswordForm;
