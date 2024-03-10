import { useForm } from 'react-hook-form';
function Form() {
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input {...register('email')} placeholder='email' type='text' />
			<input {...register('password')} placeholder='password' type='text' />
			<button type='submit'>sign in</button>
		</form>
	);
}

export default Form;
