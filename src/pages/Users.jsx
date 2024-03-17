import StyledTitle from '../ui/StyledTitle';
import SignupForm from '../features/authentication/SignupForm';

function Users() {
	return (
		<div className='section-wrapper'>
			<div className='space-y-14'>
				<StyledTitle>Create New User</StyledTitle>
				<SignupForm />
			</div>
		</div>
	);
}

export default Users;
