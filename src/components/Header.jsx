import { IoMenuSharp } from 'react-icons/io5';
import { useContext } from 'react';
import { Context } from '../context/AppContext';
import Logout from '../features/authentication/Logout';
import { HiOutlineUser } from 'react-icons/hi2';
import DarkModeToggle from '../ui/DarkModeToggle';
import IconButton from '../ui/IconButton';
import { useNavigate } from 'react-router-dom';
import UserAvatar from '../features/authentication/UserAvatar';

function Header() {
	const { setSidebarToggle } = useContext(Context);
	const navigate = useNavigate();
	return (
		<div className='flex items-center justify-between py-6 pl-4 pr-4 space-x-10 bg-white border-b border-gray-100 md:pr-20'>
			<button
				className='p-2 rounded-full hover:bg-gray-400 hover:text-white'
				onClick={() => setSidebarToggle((prev) => !prev)}>
				<IoMenuSharp style={{ height: 'auto', width: '30px' }} />
			</button>
			<div className='flex items-center space-x-10 '>
				<UserAvatar />
				<ul className='flex items-center '>
					<IconButton onClick={() => navigate('/account')}>
						<HiOutlineUser className='w-8 h-8 text-indigo-700' />
					</IconButton>
					<DarkModeToggle />
					<Logout />
				</ul>
			</div>
		</div>
	);
}

export default Header;
