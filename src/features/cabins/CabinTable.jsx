import CabinRow from './CabinRow';
import BrandButton from '../../ui/BrandButton';
import { useQuery } from '@tanstack/react-query';
import { getCabins } from '../../services/apiCabin';
import { useSearchParams } from 'react-router-dom';
import { useCabins } from './useCabins';

function CabinTable() {
	const [searchParams] = useSearchParams();
	const { cabins, isLoading } = useCabins();
	if (isLoading) return <h1>loading</h1>;
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
	console.log(sortType);
	const modifier = direction === 'asc' ? 1 : -1;
	const sortedCabins = filterCabins.sort(
		(a, b) => (a[sortType] - b[sortType]) * modifier
	);
	return (
		<div className='overflow-x-auto  max-w-screen'>
			<div className='flex flex-col space-y-9'>
				<table className='border border-gray-200 rounded-md '>
					<thead className='px-10 py-6 font-medium tracking-wide text-gray-600 border-b border-gray-100 bg-gray-50'>
						<tr className='  py-5 px-10 grid text-left  grid-cols-[1fr_1fr_1fr_.6fr_0.5fr] gap-x-10 items-center	'>
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
				<BrandButton onClick={() => {}}>Add new cabin</BrandButton>
			</div>
		</div>
	);
}

export default CabinTable;
