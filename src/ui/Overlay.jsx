import { createPortal } from 'react-dom';
import useContextProvider from '../hooks/useContext';
function Overlay({ children }) {
	const { mode, setSidebarToggle } = useContextProvider();
	const handleOverlayClick = (e) => {
		console.log(e.target);
		if (e.target === e.currentTarget) {
			setSidebarToggle(false);
		}
	};

	return createPortal(
		<div
			onClick={handleOverlayClick}
			className={`${mode} fixed top-0 left-0 z-50  w-full h-full overflow-auto transition-all duration-500 bg-[#ffffff1a] bg-opacity-50 backdrop-filter backdrop-blur-sm no-scrollbar`}>
			{children}
		</div>,
		document.body
	);
}

export default Overlay;
