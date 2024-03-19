function FormGroup({ children, error }) {
	return (
		<div className='grid grid-cols-1 gap-4  sm:grid-cols-[24rem_1fr_2fr] gap-x-10 py-5 items-center border-b border-border-dark'>
			{children}
			<span className='text-xs text-red-500'>{error && error.message}</span>
		</div>
	);
}

export default FormGroup;
