function SmallButtonTable({ icon, onClick, children }) {
	return (
		<button
			className='block w-full px-6 py-5 text-gray-600 hover:bg-gray-200 focus:outline-none'
			onClick={onClick}>
			<div className='flex items-center space-x-4'>
				{icon} <p className='text-[13px] text-nowrap'>{children}</p>
			</div>
		</button>
	);
}

export default SmallButtonTable;
