import Logo from '../ui/Logo';
import LoginForm from '../features/authentication/LoginForm';
import useContextProvider from '../hooks/useContext';
function Login() {
	const { mode } = useContextProvider();
	return (
		<div
			className={` ${mode} min-h-screen px-4 flex bg-containerBackground flex-col space-y-[3.2rem] items-center justify-center `}>
			<Logo className='h-40' />
			<h4 className='text-2xl md:text-[3rem] text-text font-semibold text-center leading-[1.4]'>
				Log in to your account
			</h4>
			<div className='w-full bg-background max-w-[48rem] px-16 py-10 shadow-sm  text-text [1.6rem] rounded-lg'>
				<LoginForm />
			</div>
		</div>
	);
}

export default Login;
