import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from './components';
import Header from './components/Header';
function Layout({ hideHeaderPaths = [] }) {
	const { pathname } = useLocation();

	return (
		<div className='block md:flex-row md:flex '>
			<Sidebar />
			<div className='flex flex-col flex-1 bg-gray-50'>
				{!hideHeaderPaths.includes(pathname) && <Header />}
				<Outlet />
			</div>
		</div>
	);
}

export default Layout;
