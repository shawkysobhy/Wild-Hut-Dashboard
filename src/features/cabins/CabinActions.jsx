import { useState } from 'react';
import { LuMoreVertical } from 'react-icons/lu';
import { AiFillEdit, AiFillDelete, AiFillCopy } from 'react-icons/ai';
import Modal from '../../ui/Modal';
import CabinForm from './CabinForm';
import useDeleteCabin from './useDeleteCabin';
import ConfirmDelete from '../../ui/ConfirmDelete';
import useMenu from '../../hooks/useMenu';
import useCreateCabin from './useCreateCabin';
import useModal from '../../hooks/useModal';
import ConfrimDuplicate from '../../ui/ConfrimDuplicate';
const CabinActions = ({ cabin }) => {
	const { showModal, openModal, closeModal } = useModal();
	const { isOpen, setIsOpen, menuRef, toggleMenu } = useMenu();
	const { deleteCabin } = useDeleteCabin();
	const [action, setAction] = useState();

	const handleButtonClick = (action) => {
		setAction(action);
		openModal();
		setIsOpen(false);
	};
	const { createCabinMutate } = useCreateCabin();
	const duplicateCabinHandler = () => {
		const { name, maxCapacity, price, discount, description } = cabin;
		createCabinMutate({
			name,
			maxCapacity,
			price,
			discount,
			description,
		});
	};
	return (
		<div className='absolute z-100'>
			<button
				className='text-gray-600 hover:text-gray-800 focus:outline-none'
				onClick={toggleMenu}>
				<LuMoreVertical />
			</button>
			{isOpen && (
				<div
					ref={menuRef}
					className='absolute z-10 top-[-100%] right-0  mt-2 bg-white border border-gray-200 rounded-lg shadow-lg'>
					<button
						className='flex items-center space-x-6 small-button-table'
						onClick={() => handleButtonClick('edit')}>
						<AiFillEdit className='flex-shrink-0 w-8 h-8 ' /> <p>Edit</p>
					</button>
					<button
						className='flex items-center space-x-6 small-button-table'
						onClick={() => handleButtonClick('duplicate')}>
						<AiFillCopy className='flex-shrink-0 w-8 h-8 ' /> <p>Duplicate</p>
					</button>
					<button
						className='flex items-center space-x-6 small-button-table'
						onClick={() => handleButtonClick('delete')}>
						<AiFillDelete className='flex-shrink-0 w-8 h-8 ' /> <p>Delete</p>
					</button>
				</div>
			)}
			{showModal && action == 'edit' && (
				<Modal onClose={closeModal}>
					<CabinForm editableCabin={cabin} onClose={closeModal} />
				</Modal>
			)}
			{showModal && action == 'delete' && (
				<Modal onClose={closeModal}>
					<ConfirmDelete
						onConfrimDelete={() => deleteCabin(cabin.id)}
						onClose={closeModal}
					/>
				</Modal>
			)}
			{showModal && action == 'duplicate' && (
				<Modal onClose={closeModal}>
					<ConfrimDuplicate
						onClose={closeModal}
						onDuplicate={duplicateCabinHandler}
					/>
				</Modal>
			)}
		</div>
	);
};

export default CabinActions;
