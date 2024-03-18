import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2';
import IconButton from './IconButton';
// import ButtonIcon from './ButtonIcon';
import { useContext } from 'react';
import { Context } from '../context/AppContext';
// import { useDarkMode } from '../context/DarkModeContext';
const className = 'w-8 h-8 text-indigo-700';
function DarkModeToggle() {
	const { mode, setMode } = useContext(Context);
	return (
		<IconButton>
			{mode == 'dark' ? (
				<HiOutlineSun className={className} onClick={() => setMode('light')} />
			) : (
				<HiOutlineMoon className={className} onClick={() => setMode('dark')} />
			)}
		</IconButton>
	);
}

export default DarkModeToggle;