import StyledTitle from '../ui/StyledTitle';
import DashboardFilter from '../features/dashboard/DashboardFilter';
import DashboardLayout from '../features/dashboard/DashboardLayout';
function Dashboard() {
	return (
		<div className='section-wrapper grow'>
			<div className='flex flex-col flex-wrap items-start justify-between space-y-4 md:px-8 md:flex-row md:space-y-0'>
				<StyledTitle>Dashboard</StyledTitle>
				<DashboardFilter />
			</div>
			<DashboardLayout />
		</div>
	);
}

export default Dashboard;
