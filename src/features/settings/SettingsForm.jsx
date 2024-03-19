import { useSettings } from './useSettings';
import FormGroup from '../../ui/FormGroup';
import StyledLabel from '../../ui/StyledLabel';
import { useForm } from 'react-hook-form';
import useUpdatingSetting from './useUpdatingSetting';
import Spinner from '../../ui/Spinner';
import StyledButton from '../../ui/StyledButton';

function SettingsForm() {
	const {
		settings: {
			minBookingLength,
			maxBookingLength,
			maxGuestPerBooking,
			breakfastPrice,
		} = {},
		isLoading,
	} = useSettings();

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();
	const { isUpdating, updateSetting } = useUpdatingSetting();
	const onSubmit = (data) => {
		console.log('data', data);
		updateSetting(data);
	};

	if (isLoading) return <Spinner />;
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='px-16 py-10 overflow-hidden border rounded-md bg-background border-border-dark '>
			<FormGroup>
				<StyledLabel>Minimum nights/booking</StyledLabel>
				<input
					{...register('minBookingLength')}
					type='number'
					defaultValue={minBookingLength}
					disabled={isUpdating}
					className='px-5 py-3 border rounded-md shadow-sm border-border-dark focus:outline-brand-light bg-background text-text'
				/>
				<span className='text-xs text-red-500'>
					{errors && errors?.message?.minBookingLength}
				</span>
			</FormGroup>
			<FormGroup>
				<StyledLabel>Maximum nights/booking</StyledLabel>
				<input
					{...register('maxBookingLength')}
					type='number'
					defaultValue={maxBookingLength}
					disabled={isUpdating}
					className='px-5 py-3 border rounded-md shadow-sm text-text border-border-dark focus:outline-brand-light bg-background'
				/>
				<span className='text-xs text-red-500'>
					{errors && errors?.message?.maxBookingLength}
				</span>
			</FormGroup>
			<FormGroup>
				<StyledLabel>Maximum guests/booking</StyledLabel>
				<input
					{...register('maxGuestPerBooking')}
					type='number'
					defaultValue={maxGuestPerBooking}
					disabled={isUpdating}
					className='px-5 py-3 border rounded-md shadow-sm text-text border-border-dark bg-background focus:outline-brand-light'
				/>
				<span className='text-xs text-red-500'>
					{errors && errors?.message?.maxGuestPerBooking}
				</span>
			</FormGroup>
			<FormGroup>
				<StyledLabel>Breakfast price</StyledLabel>
				<input
					{...register('breakfastPrice', { required: 'must be filled' })}
					type='number'
					defaultValue={breakfastPrice}
					disabled={isUpdating}
					className='px-5 py-3 border rounded-md shadow-sm text-text bg-background border-border-dark focus:outline-brand-light'
				/>
				<span className='text-xs text-red-500'>
					{errors && errors?.message?.breakfastPrice}
				</span>
			</FormGroup>
			<StyledButton color='indigo' type='submit' className={'my-4'}>
				{isUpdating ? 'Loading ' : 'Update'}
			</StyledButton>
		</form>
	);
}

export default SettingsForm;
