import { createContext, useState } from 'react';
export const Context = createContext();

const AppContextProvider = ({ children }) => {
	const [sidbarToggle, setSidebarToggle] = useState(false);
	const [mode, setMode] = useState('light');
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
