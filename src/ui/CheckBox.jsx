function Checkbox({
	checked,
	onChange,
	disabled = false,
	id,
	children,
}) {
	return (
		<div className='flex items-center gap-4'>
			<input
				type='checkbox'
				id={id}
				checked={checked}
				onChange={onChange}
				disabled={disabled}
				className={`h-9 w-9 outline-none transform origin-0 ${
					!disabled ? 'text-indigo-600' : 'text-gray-400'
				}`}
			/>
			<label
				htmlFor={!disabled ? id : ''}
				className='flex items-center flex-1 gap-2'>
				{children}
			</label>
		</div>
	);
}

export default Checkbox;
