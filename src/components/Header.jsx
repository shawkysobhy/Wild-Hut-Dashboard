import { IoMenuSharp } from 'react-icons/io5';
import { useContext } from 'react';
import { Context } from '../context/AppContext';
import Logout from '../features/authentication/Logout';
function Header() {
	const { setSidebarToggle } = useContext(Context);
	return (
		<div className='flex items-center justify-between py-6 pl-4 pr-4 space-x-10 bg-white border-b border-gray-100 md:pr-20'>
			<button
				className='p-2 rounded-full hover:bg-gray-400 hover:text-white'
				onClick={() => setSidebarToggle((prev) => !prev)}>
				<IoMenuSharp style={{ height: 'auto', width: '30px' }} />
			</button>
			<Logout />
		</div>
	);
}

export default Header;
