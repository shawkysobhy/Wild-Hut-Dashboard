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
import SmallButtonTable from '../../ui/SmallButtonTable';
const CabinActions = ({ cabin }) => {
	const { showModal, openModal, closeModal } = useModal();
	const { isOpen, setIsOpen, menuRef, toggleMenu } = useMenu();
	const [action, setAction] = useState();
	const { deleteCabin } = useDeleteCabin();

	const handleButtonClick = (action) => {
		setAction(action);
		openModal();
		setIsOpen(false);
	};
	const { createCabinMutate } = useCreateCabin();
	const duplicateCabinHandler = () => {
		const { name, maxCapacity, regularPrice, discount, description } = cabin;
		createCabinMutate({
			name,
			maxCapacity,
			regularPrice,
			discount,
			description,
		});
	};
	return (
		<div className='relative'>
			<button
				className='flex items-center justify-center w-10 h-10 rounded-md bg-border-light text-text hover:bg-gray-400 focus:outline-none'
				onClick={toggleMenu}>
				<LuMoreVertical />
			</button>
			{isOpen && (
				<div
					ref={menuRef}
					className='absolute top-0 right-0 z-20 mt-2 border rounded-lg shadow-lg border-border-dark bg-background '>
					<SmallButtonTable
						onClick={() => handleButtonClick('edit')}
						icon={
							<AiFillEdit className='flex-shrink-0 text-gray-400 w-7 h-7' />
						}>
						Edit
					</SmallButtonTable>
					<SmallButtonTable
						onClick={() => handleButtonClick('duplicate')}
						icon={
							<AiFillCopy className='flex-shrink-0 text-gray-400 w-7 h-7' />
						}>
						Duplicate
					</SmallButtonTable>
					<SmallButtonTable
						onClick={() => handleButtonClick('delete')}
						icon={
							<AiFillDelete className='flex-shrink-0 text-gray-400 w-7 h-7' />
						}>
						Delete
					</SmallButtonTable>
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
						resourseName={'Cabin'}
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
