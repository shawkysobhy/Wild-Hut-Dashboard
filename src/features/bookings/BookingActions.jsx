import { useState } from 'react';
import { LuMoreVertical } from 'react-icons/lu';
import {
	HiArrowDownOnSquare,
	HiArrowUpOnSquare,
	HiEye,
	HiTrash,
} from 'react-icons/hi2';

import Modal from '../../ui/Modal';
import useMenu from '../../hooks/useMenu';
import useModal from '../../hooks/useModal';
import SmallButtonTable from '../../ui/SmallButtonTable';
import ConfirmDelete from '../../ui/ConfirmDelete';
import { useNavigate } from 'react-router-dom';
import useCheckout from '../check-in-out/useCheckout';
import useDeleteBooking from './useDeleteBooking';
const BookingActions = ({ bookingId, status }) => {
	const { showModal, openModal, closeModal } = useModal();
	const {  deleteBooking } = useDeleteBooking();
	const { isOpen, setIsOpen, menuRef, toggleMenu } = useMenu();
	const [action, setAction] = useState();
	const { checkout, isCheckingOut } = useCheckout();
	const navigate = useNavigate();

	const bookingNavigateHandler = () => {
		navigate(`/bookings/${bookingId}`);
	};
	const checkinNavigateHandler = () => {
		navigate(`/checkin/${bookingId}`);
	};
	const handleDeleteBooking = () => {
		openModal();
		console.log(bookingId);
		deleteBooking(bookingId);
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
						onClick={bookingNavigateHandler}
						icon={<HiEye className='flex-shrink-0 text-gray-400 w-7 h-7' />}>
						See Details
					</SmallButtonTable>
					{status == 'unconfirmed' && (
						<SmallButtonTable
							onClick={checkinNavigateHandler}
							icon={
								<HiArrowDownOnSquare className='flex-shrink-0 text-gray-400 w-7 h-7' />
							}>
							Check in
						</SmallButtonTable>
					)}
					{status == 'checked-in' && (
						<SmallButtonTable
							disabled={isCheckingOut}
							onClick={() => checkout(bookingId)}
							icon={
								<HiArrowUpOnSquare className='flex-shrink-0 text-gray-400 w-7 h-7' />
							}>
							Check out
						</SmallButtonTable>
					)}

					<SmallButtonTable
						onClick={openModal}
						icon={<HiTrash className='flex-shrink-0 text-gray-400 w-7 h-7' />}>
						Delete
					</SmallButtonTable>
				</div>
			)}

			{showModal && (
				<Modal onClose={closeModal}>
					<ConfirmDelete
						resourseName={'booking'}
						onConfrimDelete={handleDeleteBooking}
					/>{' '}
				</Modal>
			)}
		</div>
	);
};

export default BookingActions;
