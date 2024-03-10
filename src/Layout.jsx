import { Outlet } from 'react-router-dom';
import { Sidebar } from './components';
import Header from './components/Header';
import Form from './components/Form';
function Layout() {
	return (
		<div className='block md:flex-row md:flex '>
			<Sidebar />
			<div className='flex flex-col flex-1 bg-gray-50'>
				<Header />
				<Outlet />
				{/* <Form/> */}
			</div>
			
		</div>
	);
}

export default Layout;
