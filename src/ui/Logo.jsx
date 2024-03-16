import lightLogo from '../assets/logo-light.png'
function Logo({className}) {
	return (
		<div className='text-center'>
			<img src={lightLogo} className={className || 'h-36'} />
		</div>
	);
}

export default Logo;
