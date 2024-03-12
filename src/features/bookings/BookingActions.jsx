import { useState } from 'react';
import { LuMoreVertical } from 'react-icons/lu';
import { AiFillEdit, AiFillDelete, AiFillCopy } from 'react-icons/ai';
import Modal from '../../ui/Modal';
import useMenu from '../../hooks/useMenu';
import useModal from '../../hooks/useModal';
import SmallButtonTable from '../../ui/SmallButtonTable';
import ConfirmDelete from '../../ui/ConfirmDelete';
const BookingActions = ({ booking }) => {
	const { showModal, openModal, closeModal } = useModal();
	const { isOpen, setIsOpen, menuRef, toggleMenu } = useMenu();
	const [action, setAction] = useState();

	const handleButtonClick = (action) => {
		setAction(action);
		openModal();
		setIsOpen(false);
	};
	return (
		<div className='relative'>
			<button
				className='flex items-center justify-center w-10 h-10 text-gray-600 bg-gray-200 rounded-md hover:text-gray-800 focus:outline-none'
				onClick={toggleMenu}>
				<LuMoreVertical />
			</button>
			{isOpen && (
				<div
					ref={menuRef}
					className='absolute top-0 right-0 z-20 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg '>
					<SmallButtonTable
						onClick={() => handleButtonClick('seeDetails')}
						icon={
							<AiFillEdit className='flex-shrink-0 w-8 h-8 text-gray-400' />
						}>
						See Details
					</SmallButtonTable>
					<SmallButtonTable
						onClick={() => handleButtonClick('checkin')}
						icon={
							<AiFillCopy className='flex-shrink-0 w-8 h-8 text-gray-400' />
						}>
						Check in
					</SmallButtonTable>
					<SmallButtonTable
						onClick={() => handleButtonClick('delete')}
						icon={
							<AiFillDelete className='flex-shrink-0 w-8 h-8 text-gray-400' />
						}>
						Delete
					</SmallButtonTable>
				</div>
			)}

			{showModal && action == 'delete' && (
				<Modal onClose={closeModal}>
					<ConfirmDelete resourseName={'booking'} />{' '}
				</Modal>
			)}
		</div>
	);
};

export default BookingActions;
