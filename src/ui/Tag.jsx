const Tag = ({ type, children }) => {
	const colorVariants = {
		sky: 'bg-sky-100 text-sky-700',
		green: 'bg-green-100 text-green-700',
		gray: 'bg-slate-300 text-gray-700',
	};
	const textColorClass = `text-${type}-700`;
	const bgColorClass = `bg-${type}-100`;
	console.log(textColorClass, bgColorClass);
	return (
		<span
			className={`inline-block uppercase font-semibold text-[12px] py-2 px-5 rounded-full ${colorVariants[type]}`}>
			{children}
		</span>
	);
};

export default Tag;
