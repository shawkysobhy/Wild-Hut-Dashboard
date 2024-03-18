import StyledTitle from '../ui/StyledTitle';
import UpdateUserDataForm from '../features/authentication/UpdateUserDataForm';
import UpdatePasswordForm from '../features/authentication/UpdatePasswordForm';
function Account() {
	return (
		<div className=' section-wrapper'>
			<div className='flex flex-col space-y-12'>
				<StyledTitle>Account</StyledTitle>
				<div className='flex flex-col space-y-8'>
					<h3 className='ml-4 text-4xl font-medium leading-normal'>
						Update user data
					</h3>
					<UpdateUserDataForm />
				</div>
				<div className='flex flex-col space-y-8'>
					<h3 className='ml-4 text-4xl font-medium leading-normal'>
						Update Password
					</h3>
					<UpdatePasswordForm />
				</div>
			</div>
		</div>
	);
}

export default Account;
