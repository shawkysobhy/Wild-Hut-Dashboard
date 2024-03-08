function StyledButton({ children, onclick }) {
	return (
		<button
			onClick={onclick}
			className={`px-6 py-5 font-semibold   rounded-md shadow-sm w-fit text-gray-600 bg-gray-50 hover:opacity-50 `}>
			{children}
		</button>
	);
}

export default StyledButton;
