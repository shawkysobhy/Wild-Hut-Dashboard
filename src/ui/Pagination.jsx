import { useSearchParams } from 'react-router-dom';
const PAGE_ITEMS = 10;
function Pagination({ count }) {
	const [searchParams, setSearchParams] = useSearchParams();
	const pageCount = Math.ceil(count / PAGE_ITEMS);
	const currentPage = !searchParams.get('page')
		? 1
		: Number(searchParams.get('page'));

	const nextHandler = () => {
		const next = currentPage === pageCount ? currentPage : currentPage + 1;
		searchParams.set('page', next);
		setSearchParams(searchParams);
	};
	const prevHandler = () => {
		let prevPage;
		if (currentPage === 1) {
			prevPage = 1;
		} else {
			prevPage = currentPage - 1;
		}
		searchParams.set('page', prevPage);
		setSearchParams(searchParams);
	};
	if (count <= 10) return null;
	return (
		<div className='flex items-center space-x-4 md:justify-between'>
			<p className='ml-3 text-[1.4rem] text-text'>
				{'showing '}{' '}
				<span className='font-semibold'>
					{(currentPage - 1) * PAGE_ITEMS + 1}
				</span>{' '}
				{' to '}
				<span className='font-semibold'>
					{currentPage === pageCount ? count : currentPage * PAGE_ITEMS}
				</span>
				of <span className='font-semibold'>{count}</span>
				{' result'}
			</p>
			<div className='flex items-center space-x-4 text-sm text-text'>
				<button
					className='px-4 py-2 text-white rounded-md cursor-pointer bg-brand-light hover:opacity-80'
					onClick={prevHandler}
					disabled={currentPage == 1}>
					{'< Previous'}
				</button>
				<button
					className='px-4 py-2 text-white rounded-md cursor-pointer bg-brand-light hover:opacity-80'
					onClick={nextHandler}
					disabled={currentPage == pageCount}>
					{'Next >'}
				</button>
			</div>
		</div>
	);
}

export default Pagination;
