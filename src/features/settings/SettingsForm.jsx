import { useSettings } from './useSettings';
import FormGroup from '../../ui/FormGroup';
import StyledLabel from '../../ui/StyledLabel';
import { useForm } from 'react-hook-form';
import useUpdatingSetting from './useUpdatingSetting';
import Spinner from '../../ui/Spinner';
import BrandButton from '../../ui/BrandButton';

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

	const { register, handleSubmit } = useForm();
	const { isUpdating, updateSetting } = useUpdatingSetting();
	const onSubmit = (data) => {
		console.log('data', data);
		updateSetting(data);
	};

	if (isLoading) return <Spinner />;
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='px-16 py-10 overflow-hidden bg-white border border-gray-100 rounded-md text-5'>
			<FormGroup>
				<StyledLabel>Minimum nights/booking</StyledLabel>
				<input
					{...register('minBookingLength')}
					type='number'
					defaultValue={minBookingLength}
					disabled={isUpdating}
					className='px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-indigo-500'
				/>
			</FormGroup>
			<FormGroup>
				<StyledLabel>Maximum nights/booking</StyledLabel>
				<input
					{...register('maxBookingLength')}
					type='number'
					defaultValue={maxBookingLength}
					disabled={isUpdating}
					className='px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-indigo-500'
				/>{' '}
			</FormGroup>
			<FormGroup>
				<StyledLabel>Maximum guests/booking</StyledLabel>
				<input
					{...register('maxGuestPerBooking')}
					type='number'
					defaultValue={maxGuestPerBooking}
					disabled={isUpdating}
					className='px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-indigo-500'
				/>
			</FormGroup>
			<FormGroup>
				<StyledLabel>Breakfast price</StyledLabel>
				<input
					{...register('breakfastPrice')}
					type='number'
					defaultValue={breakfastPrice}
					disabled={isUpdating}
					className='px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-indigo-500'
				/>
			</FormGroup>
			<BrandButton type='submit' sx={'my-4'}>
				{isUpdating ? 'Loading ' : 'Update'}
			</BrandButton>
		</form>
	);
}

export default SettingsForm;
