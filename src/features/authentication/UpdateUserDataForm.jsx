import FormGroup from '../../ui/FormGroup';
import StyledLabel from '../../ui/StyledLabel';
import StyledButton from '../../ui/StyledButton';
import { useUser } from './useUers';
import { useUpdateUser } from './useUpdateUser';
import { useState } from 'react';
function UpdateUserDataForm() {
	const { updateUser, isUpdating } = useUpdateUser();

	const {
		user: {
			email,
			user_metadata: { fullName: currentFullName },
		},
	} = useUser();
	const [fullName, setFullName] = useState(currentFullName);
	const [avatar, setAvatar] = useState(null);

	function handleSubmit(e) {
		e.preventDefault();
		if (!fullName) return;
		updateUser(
			{ fullName, avatar },
			{
				onSuccess: () => {
					setAvatar(null);
					e.target.reset();
				},
			}
		);
	}

	function handleCancel() {
		setFullName(currentFullName);
		setAvatar(null);
	}
	return (
		<form
			onSubmit={handleSubmit}
			className='px-16 py-10 overflow-hidden border rounded-md bg-background border-border-dark '>
			<FormGroup>
				<StyledLabel>Email</StyledLabel>
				<input
					type='eamil'
					disabled
					value={email}
					className='px-5 py-3 border rounded-md shadow-sm cursor-not-allowed bg-background border-border focus:outline-brand-light'
				/>
			</FormGroup>
			<FormGroup>
				<StyledLabel>Full Name</StyledLabel>
				<input
					type='text'
					value={fullName}
					onChange={(e) => setFullName(e.target.value)}
					id='fullName'
					disabled={isUpdating}
					className='px-5 py-3 border rounded-md shadow-sm bg-background border-border focus:outline-brand-light'
				/>{' '}
			</FormGroup>
			<FormGroup>
				<h3 className='font-medium text-text text-[14px]'>avatar</h3>{' '}
				<label className='relative inline-flex items-center gap-3 font-medium text-ctaText'>
					<input
						type='file'
						id='avatar'
						accept='image/*'
						onChange={(e) => setAvatar(e.target.files[0])}
						disabled={isUpdating}
						className='hidden'
						// Additional props like onChange, accept, etc., can be added here
					/>
					<span className='px-3 py-2  text-[14px] text-ctaText transition duration-300 bg-brand-light rounded-md cursor-pointer hover:opacity-50'>
						Choose File
					</span>
				</label>
			</FormGroup>
			<div className='flex items-center justify-end space-x-4 '>
				<StyledButton type='reset' color='white' onClick={handleCancel}>
					Cancel
				</StyledButton>
				<StyledButton type='submit' color='indigo' className={'my-4'}>
					{'Update account'}
				</StyledButton>
			</div>
		</form>
	);
}

export default UpdateUserDataForm;
