function StyledButton({ children, onClick, color }) {
	const variousColors = {
		red: 'bg-red-700 text-red-100',
		indigo: 'bg-indigo-600 text-green-50',
		white: 'bg-white text-gray-600 border border-gray-200',
	};
	return (
		<button
			onClick={onClick}
			className={`px-4  py-3 md:px-6 md:py-5 font-medium  text-[14px] rounded-md shadow-sm w-fit  hover:opacity-50 ${variousColors[color]} cursor-pointer`}>
			{children}
		</button>
	);
}

export default StyledButton;
