import { HiArrowRightOnRectangle } from 'react-icons/hi2';
import { useLogout } from './useLogout';
import IconButton from '../../ui/IconButton';
function Logout() {
	const { logout, isLoading } = useLogout();

	return (
		<IconButton isLoading={isLoading} onClick={logout}>
			<HiArrowRightOnRectangle className='w-8 h-8 text-indigo-700' />
		</IconButton>
	);
}

export default Logout;
