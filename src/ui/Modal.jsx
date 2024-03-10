import { IoIosCloseCircle } from 'react-icons/io';
import { createPortal } from 'react-dom';
const Modal = ({ onClose, children }) => {
	const handleOverlayClick = (e) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	return createPortal(
		<div
			onClick={handleOverlayClick}
			className='fixed top-0 left-0 z-50 w-full h-full transition-all duration-500 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm '>
			<div className='fixed w-4/5 p-8 my-4 transition-all duration-500 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg top-1/2 left-1/2 md:w-3/5'>
				{children}
			</div>
		</div>,
		document.body
	);
};
export default Modal;
