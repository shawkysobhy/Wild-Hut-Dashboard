import { LuMoreVertical } from 'react-icons/lu';
import CabinActions from './CabinActions';
function CabinRow({ cabin }) {
	const { id, name, maxCapacity, price, discount } = cabin;

	return (
		<tr
			key={id}
			className=' relative grid  py-5 px-10 grid-cols-[1fr_1fr_1fr_.6fr_0.5fr]  gap-x-10 border-b border-gray-100 justify-center items-center text-left'>
			<td className='font-semibold font-sono'>{name}</td>
			<td className=''>{`Fits up to ${maxCapacity} gustes`}</td>
			<td className='text-2xl font-semibold tracking-wide font-sono'>
				${price.toFixed(2)}
			</td>
			<td className='ml-2 text-2xl font-semibold text-green-700 font-sono'>
				{discount !== 0 ? `$${discount.toFixed(2)}` : '_'}
			</td>
			<td className='relative ml-4'>
				<CabinActions cabin={cabin} />
			</td>
		</tr>
	);
}

export default CabinRow;
