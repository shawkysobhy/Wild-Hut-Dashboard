import { IoMenuSharp } from 'react-icons/io5';
import Logout from '../features/authentication/Logout';
import { HiOutlineUser } from 'react-icons/hi2';
import DarkModeToggle from '../ui/DarkModeToggle';
import IconButton from '../ui/IconButton';
import { useNavigate } from 'react-router-dom';
import UserAvatar from '../features/authentication/UserAvatar';
import useContextProvider from '../hooks/useContext';
import Sidebar from './Sidebar';
import Overlay from '../ui/Overlay';
function Header() {
	const { setSidebarToggle, sidbarToggle } = useContextProvider();

	const navigate = useNavigate();

	return (
		<div className='flex items-center justify-between py-6 pl-4 pr-4 space-x-10 border-b lg:justify-end bg-background border-border-dark md:pr-20'>
			<button
				className='p-2 rounded-full lg:hidden text-text hover:bg-containerBackground'
				onClick={() => setSidebarToggle((prev) => !prev)}>
				<IoMenuSharp style={{ height: 'auto', width: '30px' }} />
			</button>
			<div className='flex items-center ml-auto space-x-4 '>
				<UserAvatar />
				<ul className='flex items-center '>
					<IconButton onClick={() => navigate('/account')}>
						<HiOutlineUser className='w-8 h-8 text-indigo-700' />
					</IconButton>
					<DarkModeToggle />
					<Logout />
				</ul>
			</div>
			{sidbarToggle && (
				<Overlay>
					<Sidebar />
				</Overlay>
			)}
		</div>
	);
}

export default Header;
