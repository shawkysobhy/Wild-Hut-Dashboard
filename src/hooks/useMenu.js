import { useState, useEffect, useRef } from 'react';

function useMenu() {
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef(null);
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (menuRef.current && !menuRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return { isOpen, setIsOpen, menuRef, toggleMenu };
}

export default useMenu;
