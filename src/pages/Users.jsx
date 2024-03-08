import BrandButton from '../ui/BrandButton';
import CustomInput from '../ui/CustomInput';
import FormGroup from '../ui/FormGroup';
import StyledButton from '../ui/StyledButton';
import StyledLabel from '../ui/StyledLabel';
import StyledTitle from '../ui/StyledTitle';

function Users() {
	return (
		<div className='section-wrapper'>
			<div className='space-y-14'>
				<StyledTitle>Create New User</StyledTitle>
				<form className='px-16 py-10 overflow-hidden bg-white border border-gray-100 rounded-md text-5'>
					<FormGroup>
						<StyledLabel>Full name</StyledLabel>
						<CustomInput />
					</FormGroup>
					<FormGroup>
						<StyledLabel>Email address</StyledLabel>
						<CustomInput />
					</FormGroup>
					<FormGroup>
						<StyledLabel>
							Password
							<span className='text-red-500 text-md'>(8 characters)</span>
						</StyledLabel>
						<CustomInput />
					</FormGroup>
					<FormGroup>
						<StyledLabel className='font-medium'>Repeat password</StyledLabel>
						<CustomInput />
					</FormGroup>
					<div className='flex items-center justify-end py-5 border-b border-gray-100 gap-x-10'>
						<StyledButton>Cancel</StyledButton>
						<BrandButton>Add new user</BrandButton>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Users;
