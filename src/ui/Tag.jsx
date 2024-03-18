const Tag = ({ type, children }) => {
	const colorVariants = {
		sky: 'bg-sky-100 text-sky-700',
		green: 'bg-green-100 text-green-700',
		gray: 'bg-slate-300 text-gray-700',
	};
	return (
		<span
			className={`inline-block text-nowrap uppercase font-semibold text-[11px] py-1 px-4 rounded-full ${colorVariants[type]}`}>
			{children}
		</span>
	);
};

export default Tag;
