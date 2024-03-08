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
		</QueryClientProvider>
	);
}
