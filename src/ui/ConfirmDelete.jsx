import StyledButton from './StyledButton';
function ConfirmDelete({ resourseName, onConfrimDelete, onClose }) {
	return (
		<div className=' w-[480px] px-16 bg-white py-14 rounded-lg'>
			<div className='flex flex-col space-y-5'>
				<p className='text-[2rem] leading-[1.4] font-semibold text-gray-600'>
					Delete {resourseName}
				</p>
				<p className='mb-5 text-[16px] tracking-wide text-gray-500'>
					Are you sure you want to delete this {resourseName}? This action
					cannot be undone.
				</p>
				<div className='flex items-center justify-end space-x-4'>
					<StyledButton
						color={'white'}
						onClick={() => onClose()}
						sx={'bg-gray-300 text-gray-900'}>
						Cancel
					</StyledButton>
					<StyledButton
						color={'red'}
						onClick={onConfrimDelete}
						sx={'bg-red-700 text-white'}>
						Delete
					</StyledButton>
				</div>
			</div>
		</div>
	);
}

export default ConfirmDelete;
