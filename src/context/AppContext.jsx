import { createContext, useState } from 'react';
export const Context = createContext();
import { useEffect } from 'react';
const AppContextProvider = ({ children }) => {
	const [sidbarToggle, setSidebarToggle] = useState(false);
	const [mode, setMode] = useState(() => {
		const storedValue = localStorage.getItem('mode');
		return storedValue ? JSON.parse(storedValue) : 'dark';
	});
	useEffect(() => {
		localStorage.setItem('mode', JSON.stringify(mode));
		document.body.classList.add(`body-${mode}`);
	}, [mode]);

	return (
		<Context.Provider
			value={{
				sidbarToggle,
				mode,
				setMode,
				setSidebarToggle,
			}}>
			{children}
		</Context.Provider>
	);
};

export default AppContextProvider;
