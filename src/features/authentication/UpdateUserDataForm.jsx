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
			className='px-[40px] py-[24px] overflow-hidden bg-white border border-gray-100 rounded-md '>
			<FormGroup>
				<StyledLabel>Email</StyledLabel>
				<input
					type='eamil'
					disabled
					value={email}
					className='px-5 py-3 bg-gray-200 border border-gray-300 rounded-md shadow-sm cursor-not-allowed focus:outline-indigo-500'
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
					className='px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-indigo-500'
				/>{' '}
			</FormGroup>
			<FormGroup>
				<h3 className='font-medium text-gray-600 text-[14px]'>avatar</h3>{' '}
				<label className='relative inline-flex items-center gap-3 font-medium text-white'>
					<input
						type='file'
						id='avatar'
						accept='image/*'
						onChange={(e) => setAvatar(e.target.files[0])}
						disabled={isUpdating}
						className='hidden'
						// Additional props like onChange, accept, etc., can be added here
					/>
					<span className='px-3 py-2  text-[14px]text-white transition duration-300 bg-indigo-600 rounded-md cursor-pointer hover:bg-indigo-700'>
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
