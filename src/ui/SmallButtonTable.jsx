function SmallButtonTable({ icon, onClick, children, disabled = false }) {
	return (
		<button
			disabled={disabled}
			className='block w-full px-6 py-5 text-text hover:bg-containerBackground bg-background focus:outline-none'
			onClick={onClick}>
			<div className='flex items-center space-x-4'>
				{icon} <p className='text-[13px] text-nowrap'>{children}</p>
			</div>
		</button>
	);
}

export default SmallButtonTable;
