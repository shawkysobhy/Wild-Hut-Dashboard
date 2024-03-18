function CabinFormRow({ children, error }) {
	return (
		<>
			<div className='grid grid-cols-1 gap-4  sm:grid-cols-[12rem_1fr_1fr] gap-x-10 py-5 items-center border-b border-border'>
				{children}
				<span className='text-xs text-red-500'>{error && error.message}</span>
			</div>
		</>
	);
}

export default CabinFormRow;
