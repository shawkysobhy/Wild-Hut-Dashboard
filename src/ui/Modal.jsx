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
			className='fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full overflow-auto transition-all duration-500 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm no-scrollbar'>
			<div className='w-4/5 my-4 transition-all duration-500 transform bg-white rounded-lg shadow-lg md:w-3/5'>
				{children}
			</div>
		</div>,
		document.body
	);
};
export default Modal;
