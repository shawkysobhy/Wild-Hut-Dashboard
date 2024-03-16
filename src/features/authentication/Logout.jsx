import { HiArrowRightOnRectangle } from 'react-icons/hi2';
import { useLogout } from './useLogout';
import MiniSpinner from '../../ui/MiniSpinner';
function Logout() {
	const { logout, isLoading } = useLogout();

	return (
		<button
			disabled={isLoading}
			onClick={logout}
			className='p-4 rounded-md hover:bg-gray-200'>
			{!isLoading ? (
				<HiArrowRightOnRectangle className='w-8 h-8 text-indigo-700' />
			) : (
				<MiniSpinner />
			)}
		</button>
	);
}

export default Logout;
