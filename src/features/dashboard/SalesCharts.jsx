import {
	Area,
	AreaChart,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';
import { eachDayOfInterval, format, isSameDay, subDays } from 'date-fns';
import useContextProvider from '../../hooks/useContext';

function SalesChart({ bookings, numDays }) {
	const { mode } = useContextProvider();

	const allDates = eachDayOfInterval({
		start: subDays(new Date(), numDays - 1),
		end: new Date(),
	});

	const data = allDates.map((date) => {
		return {
			label: format(date, 'MMM dd'),
			totalSales: bookings
				.filter((booking) => isSameDay(date, new Date(booking.created_at)))
				.reduce((acc, cur) => acc + cur.totalPrice, 0),
			extraSales: bookings
				.filter((booking) => isSameDay(date, new Date(booking.created_at)))
				.reduce((acc, cur) => acc + cur.extraPrice, 0),
		};
	});
	console.log(data);
	const colors =
		mode == 'dark'
			? {
					totalSales: { stroke: '#4f46e5', fill: '#4f46e5' },
					extraSales: { stroke: '#22c55e', fill: '#22c55e' },
					text: '#e5e7eb',
					background: '#18212f',
			  }
			: {
					totalSales: { stroke: '#4f46e5', fill: '#c7d2fe' },
					extraSales: { stroke: '#16a34a', fill: '#dcfce7' },
					text: '#374151',
					background: '#fff',
			  };

	return (
		<div className='flex flex-col p-12 space-y-8 rounded-md bg-background'>
			<h2 className='text-4xl font-semibold text-text'>
				Sales from {format(allDates.at(0), 'MMM dd yyyy')} &mdash;{' '}
				{format(allDates.at(-1), 'MMM dd yyyy')}{' '}
			</h2>
			<ResponsiveContainer height={250} width={'100%'}>
				<AreaChart data={data}>
					<XAxis
						dataKey='label'
						tick={{ fill: colors.text }}
						tickLine={{ stroke: colors.text }}
					/>
					<YAxis
						unit='$'
						tick={{ fill: colors.text }}
						tickLine={{ stroke: colors.text }}
					/>
					<CartesianGrid strokeDasharray={4} />
					<Tooltip
						contentStyle={{
							backgroundColor: colors.background,
							color: colors.text,
						}}
					/>

					<Area
						dataKey='totalSales'
						type='monotone'
						stroke={colors.totalSales.stroke}
						fill={colors.totalSales.fill}
						strokeWidth={2}
						name='Total sales'
						unit='$'
					/>
					<Area
						dataKey={'extraSales'}
						type='monotone'
						fill={colors.extraSales.fill}
						stroke={colors.extraSales.stroke}
						strokeWidth={2}
						name='Extras sales'
						unit='$'
					/>
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
}

export default SalesChart;
