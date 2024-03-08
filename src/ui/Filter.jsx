import { useSearchParams } from 'react-router-dom';
const activeButtonStyle = 'bg-indigo-500 text-white';

function Filter({ options, filterField }) {
	const [searchParams, setSearchParams] = useSearchParams();
	console.log(searchParams);
	const handleClick = (value) => {
		searchParams.set(filterField, value);
		setSearchParams(searchParams);
	};
	const currentActiveButton = searchParams.get(filterField) || options[0].value;

	return (
		<div className='flex p-2 space-x-2 bg-white border border-gray-100 rounded-md'>
			{options.map((option) => {
				return (
					<button
						className={`px-4 py-2 text-2xl  font-medium transition-all duration-300 ease-in-out  rounded-md hover:bg-indigo-500 hover:text-white ${
							option.value == currentActiveButton
								? activeButtonStyle
								: 'text-gray-600 bg-white'
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
