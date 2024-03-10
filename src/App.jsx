import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
	Account,
	Booking,
	Cabins,
	Checkin,
	Dashboard,
	Login,
	PageNotFound,
	Settings,
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
			{
				path: paths.dashboard,
				element: <Dashboard />,
			},
			{
				path: paths.cabins,
				element: <Cabins />,
			},
			{
				path: paths.booking,
				element: <Booking />,
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
				path: paths.check,
				element: <Checkin />,
			},
			{
				path: paths.login,
				element: <Login />,
			},
			{
				path: paths.settings,
				element: <Settings />,
			},
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
