import lightLogo from '../assets/logo-light.png';
import useContextProvider from '../hooks/useContext';
import darkLogo from '../assets/logo-dark.png';
function Logo({ className }) {
	const { mode } = useContextProvider();
	const image = mode === 'dark' ? darkLogo : lightLogo;
	return (
		<div className='text-center'>
			<img src={image} className={className || 'h-36'} />
		</div>
	);
}

export default Logo;
