import { useSearchParams } from 'react-router-dom';
function SortBy({ options }) {
	const [searchParams, setSearchParams] = useSearchParams();

	function handleChange(e) {
		console.log(e.target.value);
		searchParams.set('sortBy', e.target.value);
		setSearchParams(searchParams);
	}
	const sortBy = searchParams.get('sortBy') || '';

	return (
		<select
			onChange={handleChange}
			className='px-5 py-3 text-sm font-medium border rounded-md bg-background text-text border-border-dark'
			value={sortBy}>
			{options.map((option) => {
				return (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				);
			})}
		</select>
	);
}

export default SortBy;
