import SmallErrorMessage from '../../ui/SmallErrorMessage';

function CabinFormRow({ children, error }) {
	return (
		<>
			<div className='grid grid-cols-1 gap-4  sm:grid-cols-[12rem_1fr_1fr] gap-x-10 py-5 items-center border-b border-border'>
				{children}
				{error && <SmallErrorMessage message={error?.message} />}
			</div>
		</>
	);
}

export default CabinFormRow;
