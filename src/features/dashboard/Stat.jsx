function Stat({ icon, title, value, color }) {
	const colorVariants = {
		blue: 'bg-blue-400 text-white dark:text-blue-800',
		green: 'bg-green-500 text-white dark:text-green-800 ',
		indigo: 'bg-indigo-400 text-white dark:text-indigo-800',
		yellow: 'bg-yellow-400 text-white dark:text-yellow-800',
	};
	return (
		<div className='flex items-center space-x-8 rounded-md shadow-sm p-7 border-border-dark bg-background'>
			<div
				className={`${colorVariants[color]} flex  items-center justify-center p-4 rounded-full bg-brand-light`}>
				{icon}
			</div>
			<div className='flex flex-col space-y-2'>
				<p className='font-semibold text-text'>{title}</p>
				<p className='text-3xl text-gray-800 dark:text-gray-200'>{value}</p>
			</div>
		</div>
	);
}

export default Stat;
