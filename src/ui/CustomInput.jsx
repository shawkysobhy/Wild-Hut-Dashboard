function CustomInput({ type, placeholder, value, onChange, defaultValue }) {
	return (
		<input
			placeholder={placeholder || ''}
			type={type || 'text'}
			onChange={onChange}
			defaultValue={defaultValue}
			className='px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-indigo-500'
		/>
	);
}

export default CustomInput;
