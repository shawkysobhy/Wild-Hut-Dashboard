import MiniSpinner from './MiniSpinner';
function IconButton({ isLoading = false, onClick, children }) {
	return (
		<button
			disabled={isLoading}
			onClick={onClick}
			className='p-4 rounded-md hover:bg-gray-200'>
			{!isLoading ? children : <MiniSpinner />}
		</button>
	);
}

export default IconButton;
