import { createContext, useState } from 'react';
export const Context = createContext();

const AppContextProvider = ({ children }) => {
	const [sidbarToggle, setSidebarToggle] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const openModal = () => {
		setShowModal(true);
	};

	const closeModal = () => {
		setShowModal(false);
	};

	return (
		<Context.Provider
			value={{
				sidbarToggle,
				setSidebarToggle,
				showModal,
				openModal,
				closeModal,
			}}>
			{children}
		</Context.Provider>
	);
};

export default AppContextProvider;
