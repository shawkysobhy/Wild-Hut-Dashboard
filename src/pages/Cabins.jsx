import StyledTitle from '../ui/StyledTitle';
import CabinTableOperations from '../features/cabins/CabinTableOperations';
import CabinTable from '../features/cabins/CabinTable';
function Cabins() {
	return (
		<div className=' section-wrapper'>
			<div className='flex flex-col items-start justify-between space-y-4 md:px-8 md:flex-row md:space-y-0'>
				<StyledTitle>All cabins</StyledTitle>
				<CabinTableOperations />
			</div>
			<CabinTable />
		</div>
	);
}

export default Cabins;
