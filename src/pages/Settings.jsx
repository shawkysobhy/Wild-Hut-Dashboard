import SettingsForm from '../features/settings/SettingsForm';
import StyledTitle from '../ui/StyledTitle';
function Settings() {
	return (
		<div className='section-wrapper'>
			<div className='space-y-14'>
				<StyledTitle>Update hotel setttings</StyledTitle>
				<SettingsForm />
			</div>
		</div>
	);
}

export default Settings;
