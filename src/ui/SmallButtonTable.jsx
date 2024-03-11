function SmallButtonTable({ icon: Icon, onClick, label }) {
	return (
		<button
			className='block w-full px-10 py-5 text-gray-600 hover:bg-gray-200 focus:outline-none'
			onClick={onClick}>
			<div className='flex items-center space-x-6'>
				<Icon className='flex-shrink-0 w-8 h-8 ' /> <p>{label}</p>
			</div>
		</button>
	);
}

export default SmallButtonTable;
