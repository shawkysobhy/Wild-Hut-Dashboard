import Filter from '../../ui/Filter';
import SortBy from '../../ui/SortBy';
import TableOperations from '../../ui/TableOperations';

function CabinTableOperations() {
	return (
		<TableOperations>
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
		</TableOperations>
	);
}

export default CabinTableOperations;
