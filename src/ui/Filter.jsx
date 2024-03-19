import { useSearchParams } from 'react-router-dom';
const activeButtonStyle = 'bg-indigo-500 text-white';

function Filter({ options, filterField }) {
	const [searchParams, setSearchParams] = useSearchParams();
	console.log(searchParams);
	const handleClick = (value) => {
		searchParams.set(filterField, value);
		if (searchParams.get('page')) searchParams.set('page', 1);
		setSearchParams(searchParams);
	};
	const currentActiveButton = searchParams.get(filterField) || options[0].value;

	return (
		<div className='flex p-2 space-x-2 border rounded-md bg-background border-border-dark'>
			{options.map((option) => {
				return (
					<button
						className={`px-4 py-2 text-sm text-text font-medium  transition-all duration-300 ease-in-out  rounded-md hover:bg-brand-light hover:text-white ${
							option.value == currentActiveButton
								? activeButtonStyle
								: 'text-text bg-background'
						}`}
						key={option.value}
						onClick={() => handleClick(option.value)}>
						{option.label}
					</button>
				);
			})}
		</div>
	);
}

export default Filter;
