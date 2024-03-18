import Logo from '../ui/Logo';
import LoginForm from '../features/authentication/LoginForm';

function Login() {
	return (
		<div className='px-4 flex flex-col space-y-[3.2rem] items-center justify-center h-screen bg-gray-50'>
			<Logo className='h-40' />
			<h4 className='text-2xl md:text-[3rem] font-semibold text-center leading-[1.4]'>
				Log in to your account
			</h4>
			<div className='w-full max-w-[48rem] px-16 py-10 bg-white shadow-m text-[1.6rem] rounded-lg'>
				<LoginForm />
			</div>
		</div>
	);
}

export default Login;
