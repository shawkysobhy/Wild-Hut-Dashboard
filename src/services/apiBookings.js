import { getToday } from '../utils/helpers';
import supabase from './supabase';

export async function getBookings({ filter, sortBy, page }) {
	console.log('page', page);
	let query = supabase
		.from('bookings')
		.select(
			'id,created_at,startDate,endDate,numNights,observations,numGuests,status,totalPrice,cabins(name),guests(fullName,email)',
			{ count: 'exact' }
		);
	if (filter) {
		query = query.eq(filter.field, filter.value);
	}

	if (sortBy) {
		query = query.order(sortBy.sortFiled, {
			ascending: sortBy.sortDirection === 'asc',
		});
	}
	if (page) {
		const from = (page - 1) * 10;
		const to = from + 10 - 1;
		query = query.range(from, to);
	}
	const { data, error, count } = await query;
	if (error) {
		console.error(error);
		throw new Error('Booking not found');
	}

	return { data, count };
}
export async function getBooking(id) {
	const { data, error } = await supabase
		.from('bookings')
		.select('*, cabins(*), guests(*)')
		.eq('id', id)
		.single();

	if (error) {
		console.error(error);
		throw new Error('Booking not found');
	}

	return data;
}

export async function getBookingsAfterDate(date) {
	const { data, error } = await supabase
		.from('bookings')
		.select('created_at, totalPrice, extraPrice')
		.gte('created_at', date)
		.lte('created_at', getToday({ end: true }));

	if (error) {
		console.error(error);
		throw new Error('Bookings could not get loaded');
	}

	return data;
}

export async function getStaysAfterDate(date) {
	const { data, error } = await supabase
		.from('bookings')
		.select('*, guests(fullName)')
		.gte('startDate', date)
		.lte('startDate', getToday());

	if (error) {
		console.error(error);
		throw new Error('Bookings could not get loaded');
	}

	return data;
}

export async function getStaysTodayActivity() {
	const { data, error } = await supabase
		.from('bookings')
		.select('*, guests(fullName, nationality, countryFlag)')
		.or(
			`and(status.eq.unconfirmed,startDate.eq.${getToday()}),and(status.eq.checked-in,endDate.eq.${getToday()})`
		)
		.order('created_at');

	if (error) {
		console.error(error);
		throw new Error('Bookings could not get loaded');
	}
	return data;
}

export async function updateBooking(id, obj) {
	const { data, error } = await supabase
		.from('bookings')
		.update(obj)
		.eq('id', id)
		.select()
		.single();

	if (error) {
		console.error(error);
		throw new Error('Booking could not be updated');
	}
	return data;
}

export async function deleteBooking(id) {
	const { data, error } = await supabase.from('bookings').delete().eq('id', id);

	if (error) {
		console.error(error);
		throw new Error('Booking could not be deleted');
	}
	return data;
}
