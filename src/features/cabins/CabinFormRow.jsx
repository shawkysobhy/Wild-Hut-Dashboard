function CabinFormRow({ children }) {
	return (
		<div className='grid grid-cols-1 gap-4  sm:grid-cols-[12rem_1fr_1fr] gap-x-10 py-5 items-center border-b border-gray-100'>
			{children}
		</div>
	);
}

export default CabinFormRow;
