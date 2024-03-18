import Logo from '../ui/Logo';
import StyledNav from '../ui/StyledNav';
import Uploader from '../data/Uploader';
import { paths } from '../routes';
import {
	HiCalendar,
	HiHomeModern,
	HiOutlineCalendarDays,
	HiOutlineCog6Tooth,
	HiOutlineHome,
	HiOutlineHomeModern,
	HiOutlineUsers,
} from 'react-icons/hi2';
import useContextProvider from '../hooks/useContext';
function Sidebar() {
	const { sidbarToggle } = useContextProvider();
	return (
		<nav
			className={`w-[260px] min-h-screen bg-background flex-col items-center space-y-12 py-12
      px-10 border-r border-border 
			${sidbarToggle ? 'flex' : 'hidden'}
    `}>
			<Logo />
			<ul className='flex flex-col w-full p-0 m-0 space-y-4 list-none items-centerl items'>
				<StyledNav activeClassName='bg-blue-500' to={paths.dashboard}>
					<HiOutlineHome className='styledNav-icon' />
					<span>Home</span>
				</StyledNav>
				<StyledNav to={paths.bookings}>
					<HiCalendar className='styledNav-icon' />
					<span>Bookings</span>
				</StyledNav>
				<StyledNav to={paths.settings}>
					<HiOutlineCog6Tooth className='styledNav-icon' />
					<span>Settings</span>
				</StyledNav>
				<StyledNav to={paths.cabins}>
					<HiHomeModern className='styledNav-icon' />
					<span>Cabins</span>
				</StyledNav>
				<StyledNav to={paths.users}>
					<HiOutlineUsers className='styledNav-icon' />
					<span>Users</span>
				</StyledNav>
			</ul>
			<Uploader />
		</nav>
	);
}

export default Sidebar;

// const StyledNav = styled(NavLink)`
// 	&:link,
// 	&:visited {
// 		display: flex;
// 		align-items: center;
// 		gap: 1.2rem;
// 		color: var(--color-grey-600);
// 		font-size: 1.6rem;
// 		font-weight: 500;
// 		padding: 1.2rem 2.4rem;
// 		transition: all 0.3s;
// 	}

// 	/* This works because react-router places the active class on the active NavLink */
// 	&:hover,
// 	&:active,
// 	&.active:link,
// 	&.active:visited {
// 		color: var(--color-grey-800);
// 		background-color: var(--color-grey-50);
// 		border-radius: var(--border-radius-sm);
// 	}

// 	& svg {
// 		width: 2.4rem;
// 		height: 2.4rem;
// 		color: var(--color-grey-400);
// 		transition: all 0.3s;
// 	}

// 	&:hover svg,
// 	&:active svg,
// 	&.active:link svg,
// 	&.active:visited svg {
// 		color: var(--color-brand-600);
// 	}
// `;
