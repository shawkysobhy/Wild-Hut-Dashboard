import StyledTitle from '../ui/StyledTitle';
import CabinTableOperations from '../features/cabins/CabinTableOperations';
import CabinTable from '../features/cabins/CabinTable';
import BrandButton from '../ui/BrandButton';
import { useContext } from 'react';
import { Context } from '../context/AppContext';
import Modal from '../ui/Modal';
import CabinForm from '../features/cabins/CabinForm';
function Cabins() {
	const { showModal, closeModal, openModal } = useContext(Context);
	return (
		<div className=' section-wrapper'>
			<div className='flex flex-col items-start justify-between space-y-4 md:px-8 md:flex-row md:space-y-0'>
				<StyledTitle>All cabins</StyledTitle>
				<CabinTableOperations />
			</div>
			<CabinTable />
			<BrandButton sx={'m-4'} onClick={openModal}>
				Add new cabin
			</BrandButton>
			{showModal && (
				<Modal onClose={closeModal}>
					<CabinForm onClose={closeModal} />
				</Modal>
			)}
		</div>
	);
}

export default Cabins;
