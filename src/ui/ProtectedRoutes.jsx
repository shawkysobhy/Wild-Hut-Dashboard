import { useEffect } from 'react';
import { useUser } from '../features/authentication/useUers';
import Spinner from './Spinner';
import { useNavigate } from 'react-router-dom';
function ProtectedRoutes({ children }) {
	const { isLoading, isAuthenticated } = useUser();
	const navigate = useNavigate();
	useEffect(() => {
		if (!isAuthenticated && !isLoading) {
			navigate('/login');
		}
	}, [isAuthenticated, isLoading, navigate]);
	if (isLoading) return <Spinner />;

	if (isAuthenticated) return children;
}

export default ProtectedRoutes;
