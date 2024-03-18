import { NavLink } from 'react-router-dom';
function StyledNav({ to, children }) {
	return (
		<NavLink
			to={to}
			id='sidebar-navlink'
			className={` group flex items-center gap-5 text-text  text-[1.6rem]  font-medium	 px-10 py-5 transition-all duration-300  
      hover:text-text 
      hover:bg-containerBackground 
      rounded-lg `}>
			{children}
		</NavLink>
	);
}

export default StyledNav;
