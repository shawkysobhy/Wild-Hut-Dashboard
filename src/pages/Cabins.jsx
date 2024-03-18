import StyledTitle from '../ui/StyledTitle';
import CabinTableOperations from '../features/cabins/CabinTableOperations';
import CabinTable from '../features/cabins/CabinTable';
import Modal from '../ui/Modal';
import CabinForm from '../features/cabins/CabinForm';
import useModal from '../hooks/useModal';
import StyledButton from '../ui/StyledButton';
function Cabins() {
	const { showModal, closeModal, openModal } = useModal();
	return (
		<div className=' section-wrapper'>
			<div className='flex flex-col flex-wrap items-start justify-between space-y-4 md:px-8 md:flex-row md:space-y-0'>
				<StyledTitle>All cabins</StyledTitle>
				<CabinTableOperations />
			</div>
			<CabinTable />
			<StyledButton color='indigo' onClick={openModal}>
				Add new cabin
			</StyledButton>
			{showModal && (
				<Modal onClose={closeModal}>
					<CabinForm onClose={closeModal} />
				</Modal>
			)}
		</div>
	);
}

export default Cabins;
