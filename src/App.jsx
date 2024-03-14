import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
	Account,
	Bookings,
	Cabins,
	Checkin,
	Dashboard,
	Login,
	PageNotFound,
	Settings,
	Booking,
	Users,
} from './pages';
import Layout from './Layout';
import { paths } from './routes';
import AppContextProvider from './context/AppContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{ index: true, path: '', element: <Dashboard /> },
			{
				path: paths.dashboard,
				element: <Dashboard />,
			},
			{
				path: paths.cabins,
				element: <Cabins />,
			},
			{
				path: paths.bookings,
				element: <Bookings />,
			},
			{
				path: paths.account,
				element: <Account />,
			},
			{
				path: paths.users,
				element: <Users />,
			},
			{
				path: paths.login,
				element: <Login />,
			},
			{
				path: paths.settings,
				element: <Settings />,
			},
			{ path: paths.booking, element: <Booking /> },
			{ path: paths.checkin, element: <Checkin /> },
		],
	},
	{
		path: '*',
		element: <PageNotFound />,
	},
]);
const queryClient = new QueryClient();
export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools />
			<AppContextProvider>
				<RouterProvider router={router} />
			</AppContextProvider>
			<Toaster
				position='top-right'
				reverseOrder={false}
				gutter={8}
				toastOptions={{
					className: '',
					duration: 3000,
					style: {
						background: '#f9fafb',
						color: '#030712',
						padding: '1rem 3rem',
						maxWidth: '600px',
						fontSize: '1.5rem',
					},
					success: {
						duration: 3000,
						theme: {
							primary: 'green',
							secondary: 'black',
						},
					},
				}}
			/>
		</QueryClientProvider>
	);
}
