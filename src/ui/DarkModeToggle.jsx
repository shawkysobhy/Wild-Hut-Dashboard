import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2';
import IconButton from './IconButton';
// import ButtonIcon from './ButtonIcon';
// import { useDarkMode } from '../context/DarkModeContext';
const className = 'w-8 h-8 text-indigo-700';
function DarkModeToggle() {
	// const { isDarkMode, toggleDarkMode } = useDarkMode();
	const isDarkMode = true;
	return (
		<IconButton>
			{isDarkMode ? (
				<HiOutlineSun className={className} />
			) : (
				<HiOutlineMoon className={className} />
			)}
		</IconButton>
	);
}

export default DarkModeToggle;
