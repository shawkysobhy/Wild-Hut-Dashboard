function CustomInput({ type, placeholder, onChange, defaultValue }) {
	return (
		<input
			placeholder={placeholder || ''}
			type={type || 'text'}
			onChange={onChange}
			defaultValue={defaultValue}
			className='px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-brand-light'
		/>
	);
}

export default CustomInput;
