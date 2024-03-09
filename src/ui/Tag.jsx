const Tag = ({ type, children }) => {
	console.log(type);
	const textColorClass = `text-${type}-700`;
	const bgColorClass = `bg-${type}-100`;

	return (
		<span
			className={`inline-block  uppercase font-semibold text-[12px] py-1 px-3 rounded-full ${textColorClass}  ${bgColorClass} `}>
			{children}
		</span>
	);
};

export default Tag;
