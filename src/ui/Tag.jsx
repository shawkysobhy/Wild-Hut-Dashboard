const Tag = ({ type, children }) => {
	const colorVariants = {
		sky: 'bg-sky-100 text-sky-700 dark:bg-sky-800 dark:text-sky-100',
		green: 'bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-100',
		gray: 'bg-slate-300 text-gray-700 dark:bg-gray-700 dark:text-gray-100',
	};
	return (
		<span
			className={`inline-block text-nowrap uppercase font-semibold text-[11px] py-1 px-4 rounded-full ${colorVariants[type]}`}>
			{children}
		</span>
	);
};

export default Tag;
