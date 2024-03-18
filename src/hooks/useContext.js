import { Context } from '../context/AppContext';
import { useContext } from 'react';
function useContextProvider() {
	const { sidbarToggle, mode, setMode, setSidebarToggle } = useContext(Context);
	return { sidbarToggle, mode, setMode, setSidebarToggle };
}

export default useContextProvider;
