import CabinRow from './CabinRow';
import { useSearchParams } from 'react-router-dom';
import { useCabins } from './useCabins';
import Spinner from '../../ui/Spinner';
function CabinTable() {
	const [searchParams] = useSearchParams();
	const { cabins, isLoading } = useCabins();
	if (isLoading) return <Spinner />;
	const filterValue = searchParams.get('discount') || 'all';
	let filterCabins = cabins;
	if (filterValue === 'all') {
		filterCabins == cabins;
	}
	if (filterValue == 'no-discount') {
		filterCabins = cabins.filter((cabins) => cabins.discount === 0);
	}
	if (filterValue === 'with-discount') {
		filterCabins = cabins.filter((cabins) => cabins.discount > 0);
	}

	const sortBy = searchParams.get('sortBy') || '';
	const [sortType, direction] = sortBy.split('-');
	const modifier = direction === 'asc' ? 1 : -1;
	const sortedCabins = filterCabins.sort(
		(a, b) => (a[sortType] - b[sortType]) * modifier
	);
	return (
		<div className='overflow-x-auto max-w-screen text-text'>
			<div className='flex flex-col overflow-x-auto space-y-9 max-w-screen'>
				<table className='border rounded-md border-border-dark'>
					<thead className='px-10 py-6 text-sm tracking-wide border-b border-border-dark text-text '>
						<tr className='bg-containerBackground  py-5 px-10 grid text-left  grid-cols-[1fr_1fr_1fr_.6fr_0.5fr] gap-x-10 items-center	'>
							<th>Cabin</th>
							<th>CAPACITY</th>
							<th>PRICE</th>
							<th className='self-center'>DISCOUNT</th>
							<th>ACTIONS</th>
						</tr>
					</thead>
					<tbody>
						{sortedCabins.map((cabin) => (
							<CabinRow key={cabin.id} cabin={cabin} />
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default CabinTable;
