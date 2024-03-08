function BrandButton({ children, onClick }) {
	return (
		<button
			onClick={onClick}
			className='px-6 py-5 font-semibold bg-indigo-600 border-none rounded-md shadow-sm w-fit text-indigo-50 hover:bg-indigo-800'>
			{children}
		</button>
	);
}

export default BrandButton;
