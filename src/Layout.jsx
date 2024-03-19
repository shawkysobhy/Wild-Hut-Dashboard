import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from './components';
import Header from './components/Header';
import { useContext } from 'react';
import { Context } from './context/AppContext';
function Layout({ hideHeaderPaths = [] }) {
	const { pathname } = useLocation();
	const { mode } = useContext(Context);
	return (
		<div className={`block ${mode} lg:flex  min-h-screen`}>
			<div className='hidden lg:block'>
				<Sidebar />
			</div>
			<div className='flex flex-col flex-1 bg-containerBackground'>
				{!hideHeaderPaths.includes(pathname) && <Header />}
				<Outlet />
			</div>
		</div>
	);
}

export default Layout;
