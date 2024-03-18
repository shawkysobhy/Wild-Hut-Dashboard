function CustomInputForm({ register, name, type, placeholder, autocomplete }) {
	return (
		<input
			{...register(name)}
			type={type || 'text'}
			autoComplete={autocomplete || 'on'}
			placeholder={placeholder || ''}
			className='px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-brand-light'
		/>
	);
}

export default CustomInputForm;
