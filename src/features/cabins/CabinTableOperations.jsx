import Filter from '../../ui/Filter';
import SortBy from '../../ui/SortBy';

function CabinTableOperations() {
	return (
		<div className='flex flex-col space-y-4 max-w-4/5 md:items-center md:flex-row md:space-y-0 md:space-x-4'>
			<Filter
				filterField={'discount'}
				options={[
					{ value: 'all', label: 'All' },
					{ value: 'no-discount', label: 'No discount' },
					{ value: 'with-discount', label: 'With discount' },
				]}
			/>
			<SortBy
				options={[
					{ value: 'price-asc', label: 'Sory by price (low-first)' },
					{ value: 'price-desc', label: 'Sory by price (high-first)' },
					{ value: 'maxCapacity-asc', label: 'Sort by capacity (low-first)' },
					{ value: 'maxCapacity-desc', label: 'Sort by capacity (high-first)' },
				]}
			/>
		</div>
	);
}

export default CabinTableOperations;
