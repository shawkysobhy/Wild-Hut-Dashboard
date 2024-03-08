import { NavLink } from 'react-router-dom';
function StyledNav({ to, children }) {
	return (
		<li>
			<NavLink
				to={to}
				id='sidebar-navlink'
				className={`navLink group flex items-center gap-5 text-gray-600  text-[1.6rem]  font-medium	 px-10 py-5 transition-all duration-300 
      hover:text-gray-800 
      hover:bg-gray-50 
      rounded-lg `}>
				{children}
			</NavLink>
		</li>
	);
}

export default StyledNav;
