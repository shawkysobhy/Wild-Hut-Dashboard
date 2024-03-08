function FormGroup({ children }) {
	return (
		<div className='grid grid-cols-1 gap-4  sm:grid-cols-[24rem_1fr_2fr] gap-x-10 py-5 items-center border-b border-gray-100'>
			{children}
		</div>
	);
}

export default FormGroup;
