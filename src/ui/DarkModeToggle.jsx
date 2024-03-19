import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2';
import IconButton from './IconButton';
import { useContext } from 'react';
import { Context } from '../context/AppContext';
const className = 'w-8 h-8 text-indigo-700';
function DarkModeToggle() {
	const { mode, setMode } = useContext(Context);
	const handleMode = () => {
		const newmode = mode == 'dark' ? 'light' : 'dark';
		setMode(newmode);
	};
	return (
		<IconButton onClick={handleMode}>
			{mode == 'dark' ? (
				<HiOutlineSun className={className} />
			) : (
				<HiOutlineMoon className={className} />
			)}
		</IconButton>
	);
}

export default DarkModeToggle;
