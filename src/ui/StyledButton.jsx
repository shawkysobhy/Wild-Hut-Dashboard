function StyledButton({
	className,
	children,
	onClick,
	color,
	disabled = false,
	type,
}) {
	const variousColors = {
		red: 'bg-red-700 text-red-100',
		indigo: 'bg-brand-light text-green-50',
		white: 'bg-white text-gray-700 border border-border',
	};

	return (
		<button
			type={type}
			disabled={disabled}
			onClick={onClick}
			className={`  px-4  py-3 md:px-6 md:py-5 font-medium  text-sm rounded-md shadow-sm w-fit  hover:opacity-50 ${
				variousColors[color]
			}  ${disabled ? 'cursor-not-allowed opacity-50' : ''} ${className}`}>
			{children}
		</button>
	);
}

export default StyledButton;
