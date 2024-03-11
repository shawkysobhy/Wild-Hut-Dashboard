function StyledButton({ children, onClick, sx }) {
	return (
		<button
			onClick={onClick}
			className={`px-6 py-5 font-semibold  rounded-md shadow-sm w-fit  hover:opacity-50 ${sx}`}>
			{children}
		</button>
	);
}

export default StyledButton;
