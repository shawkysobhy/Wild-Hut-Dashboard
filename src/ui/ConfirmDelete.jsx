import Modal from './Modal';
import { useState } from 'react';
function ConfirmDelete({ onConfrimDelete, onClose }) {
	return (
		<div className='px-16 bg-white py-14'>
			<div className='w-[40rem] flex flex-col space-y-5'>
				<p className='text-[2rem] leading-[1.4] font-semibold text-gray-600'>
					Delete Cabin
				</p>
				<p className='mb-5 text-2xl tracking-wide text-gray-500'>
					Are you sure you want to delete this cabins permanently? This action
					cannot be undone.
				</p>
				<div>
					<button onClick={() => onClose()}>Cancel</button>
					<button onClick={onConfrimDelete}>Delete</button>
				</div>
			</div>
		</div>
	);
}

export default ConfirmDelete;
