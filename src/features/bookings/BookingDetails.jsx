import StyledTitle from '../../ui/StyledTitle';
import { useNavigate } from 'react-router-dom';
import { useMoveBack } from '../../hooks/useMoveBack';
import Tag from '../../ui/Tag';
import { useBooking } from './useBooking';
import Spinner from '../../ui/Spinner';
import StyledButton from '../../ui/StyledButton';
import BookingData from './BookingData';
import useDeleteBooking from './useDeleteBooking';
import useModal from '../../hooks/useModal';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';
const statusTagName = {
	unconfirmed: 'sky',
	'checked-in': 'green',
	'checked-out': 'gray',
};
function BookingDetails() {
	const moveBack = useMoveBack();
	const { showModal, openModal, closeModal } = useModal();

	const { deleteBooking } = useDeleteBooking();

	const navigate = useNavigate();
	const { isLoading, booking } = useBooking();
	if (isLoading) return <Spinner />;
	const { id, status } = booking;
	return (
		<div className='flex flex-col max-w-[1200px] mx-auto space-y-12'>
			<div className='flex items-center justify-between'>
				<div className='flex flex-col px-4 space-y-4 md:items-center md:space-y-0 md:space-x-6 md:flex-row '>
					<StyledTitle>Booking #{id}</StyledTitle>
					<Tag type={statusTagName[status]}>{status.replace('-', ' ')}</Tag>
				</div>
				<button
					className='hidden text-3xl text-indigo-700 font-semidbolds md:block'
					onClick={moveBack}>
					&larr; Back{' '}
				</button>
			</div>
			<BookingData booking={booking} />
			<div className='flex flex-wrap ml-auto space-x-3 md:space-x-5'>
				{status == 'unconfirmed' && (
					<StyledButton
						color='indigo'
						onClick={() => {
							navigate(`/checkin/${id}`);
						}}>
						Check in
					</StyledButton>
				)}
				{status == 'checked-in' && (
					<StyledButton
						color='indigo'
						onClick={() => {
							navigate(`/checkin/${id}`);
						}}>
						Check out
					</StyledButton>
				)}
				<StyledButton color='red' onClick={openModal}>
					Delete booking
				</StyledButton>
				<StyledButton color='white' onClick={moveBack}>
					Back
				</StyledButton>
			</div>
			{showModal && (
				<Modal onClose={closeModal}>
					<ConfirmDelete
						resourseName={'Booking'}
						onConfrimDelete={() => {
							deleteBooking(id);
							navigate('/bookings');
						}}
						onClose={closeModal}
					/>
				</Modal>
			)}
		</div>
	);
}

export default BookingDetails;
