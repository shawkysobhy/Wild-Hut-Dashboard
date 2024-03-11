import BrandButton from './BrandButton';
import StyledButton from './StyledButton';
function ConfrimDuplicate({ onClose, onDuplicate }) {
	return (
		<div className=' w-[480px] px-16 bg-white py-14 rounded-lg'>
			<div className='flex flex-col space-y-5'>
				<p className='text-[2rem] leading-[1.4] font-semibold text-gray-600'>
					Duplicate Cabin
				</p>
				<p className='mb-5 text-[16px] tracking-wide text-gray-500'>
					by duplicating this cabin new cabin will add to cabin table with all
					proprites of old cabin but you can custom it after duplicating
				</p>
				<div className='flex items-center justify-end space-x-4'>
					<StyledButton onClick={onClose} sx={'bg-gray-200 '}>
						Cancel
					</StyledButton>
					<BrandButton
						onClick={() => {
							onDuplicate();
							onClose();
						}}>
						duplicate
					</BrandButton>
				</div>
			</div>
		</div>
	);
}

export default ConfrimDuplicate;
