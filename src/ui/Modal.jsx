import { IoClose } from 'react-icons/io5';
import { createPortal } from 'react-dom';
import useContextProvider from '../hooks/useContext';
const Modal = ({ onClose, children }) => {
	const { mode } = useContextProvider();
	const handleOverlayClick = (e) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	return createPortal(
		<div
			onClick={handleOverlayClick}
			className={`${mode}  p-4 fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full overflow-auto transition-all duration-500 bg-[#ffffff1a] bg-opacity-50 backdrop-filter backdrop-blur-sm no-scrollbar`}>
			<div className='my-4 transition-all duration-500 transform rounded-lg shadow-lg bg-background '>
				<button className='absolute right-4 top-4' onClick={() => onClose()}>
					<IoClose className='w-12 h-12 text-gray-500 dark:text-gray-50 ' />
				</button>
				{children}
			</div>
		</div>,
		document.body
	);
};
export default Modal;
