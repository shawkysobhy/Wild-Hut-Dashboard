import Logo from '../ui/Logo';
import StyledNav from '../ui/StyledNav';
import { paths } from '../routes';
import {
	HiHomeModern,
	HiOutlineCalendarDays,
	HiOutlineCog6Tooth,
	HiMiniAdjustmentsHorizontal,
	HiOutlineUsers,
} from 'react-icons/hi2';
function Sidebar() {
	return (
		<nav
			className={`w-[260px]  min-h-screen bg-background flex-col items-center space-y-12 py-24
      px-10 border-r border-border-dark 
flex    `}>
			<Logo />
			<ul className='flex flex-col w-full p-0 m-0 space-y-4 list-none items-centerl items'>
				<StyledNav activeClassName='bg-blue-500' to={paths.dashboard}>
					<HiMiniAdjustmentsHorizontal className='styledNav-icon' />
					<span>Dashboard</span>
				</StyledNav>
				<StyledNav to={paths.cabins}>
					<HiHomeModern className='styledNav-icon' />
					<span>Cabins</span>
				</StyledNav>
				<StyledNav to={paths.bookings}>
					<HiOutlineCalendarDays className='styledNav-icon' />
					<span>Bookings</span>
				</StyledNav>
				<StyledNav to={paths.settings}>
					<HiOutlineCog6Tooth className='styledNav-icon' />
					<span>Settings</span>
				</StyledNav>

				<StyledNav to={paths.users}>
					<HiOutlineUsers className='styledNav-icon' />
					<span>Users</span>
				</StyledNav>
			</ul>
		</nav>
	);
}

export default Sidebar;
