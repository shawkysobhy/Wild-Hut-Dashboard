import { createContext, useState } from 'react';
export const Context = createContext();

const AppContextProvider = ({ children }) => {
	const [sidbarToggle, setSidebarToggle] = useState(false);

	return (
		<Context.Provider value={{ sidbarToggle, setSidebarToggle }}>
			{children}
		</Context.Provider>
	);
};

export default AppContextProvider;
