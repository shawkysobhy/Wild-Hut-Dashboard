function FormInput({ name, validationRules, type = 'text', register }) {
	return (
		<input
			{...register(name, validationRules)}
			type={type}
			className='px-5 py-3 border border-gray-300 rounded-md shadow-sm text-text focus:outline-indigo-500 bg-background'
		/>
	);
}

export default FormInput;
