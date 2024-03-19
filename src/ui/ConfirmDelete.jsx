import StyledButton from './StyledButton';
import useContextProvider from '../hooks/useContext';
function ConfirmDelete({ resourseName, onConfrimDelete, onClose }) {
	const { mode } = useContextProvider();
	return (
		<div
			className={`${mode} w-[300px] sm:w-[480px] px-16 bg-background py-14 rounded-lg`}>
			<div className='flex flex-col space-y-5'>
				<p className='text-2xl leading-[1.4] font-semibold text-text'>
					Delete {resourseName}
				</p>
				<p className='mb-5 text-base tracking-wide text-gray-500'>
					Are you sure you want to delete this {resourseName}? This action
					cannot be undone.
				</p>
				<div className='flex items-center justify-end space-x-4'>
					<StyledButton color={'white'} onClick={() => onClose()}>
						Cancel
					</StyledButton>
					<StyledButton color={'red'} onClick={onConfrimDelete}>
						Delete
					</StyledButton>
				</div>
			</div>
		</div>
	);
}

export default ConfirmDelete;
