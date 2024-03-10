function BrandButton({ children, onClick, sx, type }) {
	return (
		<button
			type={type}
			onClick={onClick}
			className={`px-6 py-5 font-semibold bg-indigo-600 border-none rounded-md shadow-sm w-fit text-indigo-50 hover:bg-indigo-800 ${sx}`}>
			{children}
		</button>
	);
}

export default BrandButton;
