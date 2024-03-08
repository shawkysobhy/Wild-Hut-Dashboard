import { useSettings } from './useSettings';
import FormGroup from '../../ui/FormGroup';
import StyledLabel from '../../ui/StyledLabel';
import CustomInput from '../../ui/CustomInput';
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
	if (isLoading) return <h1>isloading</h1>;
	return (
		<form className='px-16 py-10 overflow-hidden bg-white border border-gray-100 rounded-md text-5'>
			<FormGroup>
				<StyledLabel>Minimum nights/booking</StyledLabel>
				<CustomInput type='number' value={11} defaultValue={minBookingLength} />
			</FormGroup>
			<FormGroup>
				<StyledLabel>Maximum nights/booking</StyledLabel>
				<CustomInput type='number' value={90} defaultValue={maxBookingLength} />
			</FormGroup>
			<FormGroup>
				<StyledLabel>Maximum guests/booking</StyledLabel>
				<CustomInput
					type='number'
					value={8}
					defaultValue={maxGuestPerBooking}
				/>
			</FormGroup>
			<FormGroup>
				<StyledLabel>Breakfast price</StyledLabel>
				<CustomInput type='number' value={15} defaultValue={breakfastPrice} />
			</FormGroup>
		</form>
	);
}

export default SettingsForm;
