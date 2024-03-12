function SmallButtonTable({ icon, onClick, children }) {
	return (
		<button
			className='block w-full px-10 py-5 text-gray-600 hover:bg-gray-200 focus:outline-none'
			onClick={onClick}>
			<div className='flex items-center space-x-6'>
				{icon} <p>{children}</p>
			</div>
		</button>
	);
}

export default SmallButtonTable;
