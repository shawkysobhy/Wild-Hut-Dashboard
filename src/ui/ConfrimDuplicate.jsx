import StyledButton from './StyledButton';
function ConfrimDuplicate({ onClose, onDuplicate }) {
	return (
		<div className=' w-[480px] px-16 bg-background py-14 rounded-lg'>
			<div className='flex flex-col space-y-5'>
				<p className='text-3xl font-semibold leading-normal text-text'>
					Duplicate Cabin
				</p>
				<p className='mb-5 text-base tracking-wide text-text'>
					by duplicating this cabin new cabin will add to cabin table with all
					proprites of old cabin but you can custom it after duplicating
				</p>
				<div className='flex items-center justify-end space-x-4'>
					<StyledButton onClick={onClose} color='white' sx={'bg-gray-200 '}>
						Cancel
					</StyledButton>
					<StyledButton
						color='indigo'
						onClick={() => {
							onDuplicate();
							onClose();
						}}>
						duplicate
					</StyledButton>
				</div>
			</div>
		</div>
	);
}

export default ConfrimDuplicate;
